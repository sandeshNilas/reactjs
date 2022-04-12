import React, {useState} from 'react'



export default function TextForm(props) {
    const handelUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handelLoClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
        
    }
    const handelOnChange = (event) =>{
        console.log("On change was called");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
      <>
      
    <div className='container' style={{color:props.mode==='light'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it"}</p>

    </div>
    </>
  )
}
