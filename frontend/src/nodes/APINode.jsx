import React from "react";
import { Handle, Position } from "reactflow";

export const APINode =({ id })=> {
  return (
    <div className="base-node" style={{width: 200, height: 80}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-request`}
        style={{ top: "50%" }}
      />

      <span style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Calls external API</span>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{ top: "50%" }}
      />
    </div>
  );
}
