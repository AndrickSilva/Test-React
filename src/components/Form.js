import React, { useState } from 'react'

export default function Form(props) {

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("clicked Convert to upper case");   
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    // console.log(useState("Enter text here"));
    return (
        <div>
            <h2 className="heading my-3 ">{props.text}</h2>
            <div className="py-2">
                <input type="text" id="myBox" value={text} onChange={handleOnChange} className="form-control"></input>
            </div>
            <button className="btn btn-primary my-3" onClick={handleClick} >Convert to upper case</button>
        </div>
    )
}
