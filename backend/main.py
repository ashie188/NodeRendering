from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    print("NODES RECEIVED:", pipeline.nodes)
    print("EDGES RECEIVED:", pipeline.edges)
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # --- DAG LOGIC STARTS HERE ---
    node_ids = {node["id"] for node in nodes}

    graph = defaultdict(list)
    indegree = {node_id: 0 for node_id in node_ids}

    for edge in edges:
        src = edge.get("source")
        tgt = edge.get("target")

        if src in node_ids and tgt in node_ids:
            graph[src].append(tgt)
            indegree[tgt] += 1

    queue = deque([n for n in node_ids if indegree[n] == 0])
    visited = 0

    while queue:
        curr = queue.popleft()
        visited += 1
        for neighbor in graph[curr]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == len(node_ids)
    # --- DAG LOGIC ENDS HERE ---

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
