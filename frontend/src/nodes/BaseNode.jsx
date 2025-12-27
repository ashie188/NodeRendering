import React from "react";

export default function BaseNode(props) {
  console.log("inside the base node");
  return (
    <div className="base-node">
      <div>
        <span style={{display:"flex", justifyContent:"center"}} >{props.name}</span>
      </div>
      <div>

        {props.name && <label>
           {(props.name==="Text")? "Text": "Name"}:
        {props.name === "Text" ? (
        <textarea className="text-node-textarea" value={props.namevalue} onChange={props.handlebasenodename}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        ):(
          <input type="text" value={props.namevalue} onChange={props.handlebasenodename} />
        )}
        </label>}

        { props.type && <label>
          Type:
          <select value={props.typevalue} onChange={props.handlebasenodetype}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>}

      </div>
    </div>
  );
}
