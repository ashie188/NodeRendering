// textNode.js
import React,{ useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const TextNode = ({ id, data })=>  {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    updateNodeField(id, "text", e.target.value);
  };

  return (
    <div style={{ width: 200, minHeight: 80 }}>
      <BaseNode id={id} name="Text" type="" namevalue={currText} typevalue={null} handlebasenodename={handleTextChange} handlebasenodetype={null}/>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
