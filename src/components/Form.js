import React, { useState } from 'react'

export default function Form(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("clicked Convert to upper case");   
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClClick = ()=>{
        let newText = ('');
        setText(newText)
    }

    const handleCpClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // console.log(useState("Enter text here"));
    return (
        <>
            <div className="container">
                <h2 className="heading my-3 ">{props.text}</h2>
                <div className="py-2">
                    <input type="text" id="myBox" placeholder='Enter text here' value={text} onChange={handleOnChange} className="form-control"></input>
                </div>
                <button className="btn btn-primary my-3 " onClick={handleUpClick} >Convert to upper case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert to lower case</button>
                <button className="btn btn-primary my-3 " onClick={handleClClick} >Clear</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCpClick} >Copy</button>
            </div>

            <div className="container my-5">
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words, {text.length} char</p>
                <p>{ 0.008 * text.split(" ").length}mins Read time </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
