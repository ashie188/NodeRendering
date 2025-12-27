// inputNode.jsx
import React,{ useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80}}>
      <BaseNode id={id} name="Input" type="text" namevalue={currName} typevalue={inputType} handlebasenodename={handleNameChange} handlebasenodetype={handleTypeChange}/>
      <Handle 
      type="source"
      position={Position.Right}
      id={`${id}-value`}
      />
    </div>
  );
}
