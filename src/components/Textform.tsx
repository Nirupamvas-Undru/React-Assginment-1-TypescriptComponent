//rafce
import React, { useState } from 'react'

interface Props{
    heading: string;
}


const Textform: React.FC<Props> = ({heading}) => {
  
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
         let newText = text.toUpperCase();
         setText(newText);
       }

       const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
      }
   
      const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
      }
       const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        // console.log("On change");
         setText(event.target.value);  
       }
  
  
    const[text, setText] = useState<string>("");
  return (
    <>
    <div className="container">
      <h1>{heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={12}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Textform