import React,{useState} from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";

export const MathNode=({ id, data }) =>{
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("Math-", "math_")
  );

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-a`}
        style={{ top: "40%" }}
      />
      <BaseNode id={id} name="Math" type="" namevalue={currName} typevalue={null} handlebasenodename={handleNameChange} handlebasenodetype={null}/>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-result`}
        style={{ top: "50%" }}
      />
    </div>
  );
}
