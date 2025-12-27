// toolbar.js
import React from 'react';
import DraggableNode from './draggableNode';

export default function PipelineToolbar() {
    return (
        <div>
            <div className="node-palette" style={{ padding: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />  
                <DraggableNode type='condition' label='Condition' /> 
                <DraggableNode type='api' label='api' />
                <DraggableNode type='backup' label='Backup' /> 
                <DraggableNode type='validity' label='Validity' />       
            </div>
        </div>
    );
};
