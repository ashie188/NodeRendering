// inputNode.jsx
import React,{ useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';

export const BackupNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('Backup-', 'backup_'));
  const [BackupType, setBackupType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setBackupType(e.target.value);
  };

  return (
    <div style={{width: 200, height: 80}}>
      <BaseNode id={id} name="Backup" type="text" namevalue={currName} typevalue={BackupType} handlebasenodename={handleNameChange} handlebasenodetype={handleTypeChange}/>
      <Handle 
      type="source"
      position={Position.Right}
      id={`${id}-value`}
      />
    </div>
  );
}
