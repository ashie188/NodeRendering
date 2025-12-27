// submit.js
import React from "react";
import axios from "axios";
import { useStore } from "./store";

export default function SubmitButton() {
  async function handlesubmitclick(e) {
    console.log("submit clicked");
    const { nodes, edges } = useStore.getState();
    try {
      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        { nodes, edges }
      );
      console.log(response.data);
      const { num_nodes, num_edges, is_dag } = response.data;
      alert(
        `Pipeline Analysis\n\n` +
          `Nodes: ${num_nodes}\n` +
          `Edges: ${num_edges}\n` +
          `Is DAG: ${is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      console.log("Error Fetching from the backend", error);
      alert("Error Fetching");
    }
  }
  return (
    <div className="submit">
      <button onClick={handlesubmitclick} type="submit">
        Submit
      </button>
    </div>
  );
}
