# VectorShift Frontend Technical Assessment

## Overview
This project is a visual pipeline builder where users can create node-based workflows using a drag-and-drop interface.  
The frontend allows users to construct pipelines, and the backend validates the pipeline by counting nodes and edges and checking whether the pipeline forms a **Directed Acyclic Graph (DAG)**.

---

## Tech Stack

### Frontend
- React
- React Flow
- Zustand (state management)

### Backend
- FastAPI (Python)
- DAG validation using **Kahn’s Algorithm**

---

## Features

- Drag-and-drop pipeline editor
- Reusable node abstraction (`BaseNode`)
- Multiple node types (Input, LLM, Text, Output, and additional custom nodes)
- Auto-resizing Text node based on user input
- Frontend-to-backend integration on submit
- Backend validation of:
  - Number of nodes
  - Number of edges
  - Whether the pipeline is a DAG
- User-friendly alert displaying pipeline analysis

---

## How the DAG Validation Works

When the user clicks **Submit**, the frontend sends the pipeline’s nodes and edges to the backend.  
The backend constructs a graph using node IDs and applies **Kahn’s Algorithm** to determine whether the graph contains any cycles.

If all nodes can be visited through topological sorting, the pipeline is a DAG; otherwise, it is not.

---

## Running the Project Locally

### Backend
```bash
cd backend
python -m uvicorn main:app --reload

The backend will run at:
http://localhost:8000

Frontend
cd frontend
npm install
npm start

The frontend will run at:
http://localhost:3000