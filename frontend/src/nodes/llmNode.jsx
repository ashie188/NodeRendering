// llmNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div className="base-node" style={{ width: 200, height: 80 }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <div>
        <span style={{display:"flex", justifyContent:"center"}}>LLM</span>
      </div>
      <div>
        <span style={{display:"flex", alignItems:"center", justifyContent:"center"}}>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
};
