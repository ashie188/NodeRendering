import React from "react";
import { Handle, Position } from "reactflow";

export const ConditionNode = ({ id })=> {
  return (
    <div className="base-node" style={{width: 200, height: 80}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ top: "50%" }}
      />

      <span style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Checks a condition</span>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-true`}
        style={{ top: "35%" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-false`}
        style={{ top: "65%" }}
      />
    </div>
  );
}
