// outputNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';

export const ValidityNode = ({ id, data })=>  {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('Validity-', 'validity_'));
  const [currType, setcurrType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handlecurrChange = (e) => {
    setcurrType(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80 }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <BaseNode id={id} name="Valid" type="text" namevalue={currName} typevalue={currType} handlebasenodename={handleNameChange} handlebasenodetype={handlecurrChange}/>
    </div>
  );
}
