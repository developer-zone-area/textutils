import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success');
  };
  const handleTiClick = () => {
    let newText = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert('Converted to Titlecase','success');
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success');
  };
  const handleCopy = () => {
    let newText = document.getElementById("Textarea");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert('Copied text','success');
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed extra space','success');
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.color, backgroundColor:props.backColor}}>
        <h1>{props.header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="Textarea"
            rows="4"
            style={{backgroundColor: props.backColor, color: props.color}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          {" "}
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTiClick}>
          {" "}
          convert to TitleCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          {" "}
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          {" "}
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3"  style={{color: props.color}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} character
        </p>
        <p>{0.008 / text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length> 0 ? text : 'Enter somthing to textbox above to preview here'}</p>
      </div>
    </>
  );
}
