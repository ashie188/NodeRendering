// outputNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data })=>  {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80 }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <BaseNode id={id} name="Output" type="text" namevalue={currName} typevalue={outputType} handlebasenodename={handleNameChange} handlebasenodetype={handleTypeChange}/>
    </div>
  );
}
