import React, { useState } from 'react'

export default function Form(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to uppercase successfully", "success");
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase successfully", "success");
    }
    
    const handleClClick = ()=>{
        let newText = ('');
        setText(newText)
        props.showAlert("Cleared successfully", "danger");
    }
    
    const handleCpClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to clipboard", "primary");
    }
    
    

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // console.log(useState("Enter text here"));
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'#fff':'black' }}>
                <h2 className="heading my-3 ">{props.text}</h2>
                <div className="py-2">
                    <input type="text" id="myBox" placeholder='Enter text here' style={{backgroundColor: props.mode==='dark'?'#fff':'dark' }} value={text} onChange={handleOnChange} className="form-control"></input>
                </div>
                <button className="btn btn-primary my-3 " onClick={handleUpClick} >Convert to upper case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert to lower case</button>
                <button className="btn btn-primary my-3 " onClick={handleClClick} >Clear</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCpClick} >Copy</button>
            </div>

            <div className="container my-5" style={{color: props.mode==='dark'?'#fff':'black' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words, {text.length} char</p>
                <p>{ 0.008 * text.split(" ").length}mins Read time </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text in the above text box to preview it here"}</p>
            </div>
        </>
    )
}
