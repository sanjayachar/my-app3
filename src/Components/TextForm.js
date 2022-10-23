import React,{useState} from 'react'
//use state is imported from the react
export default function TextForm(props) {
    //basically this syntax is creating the text constent ,for any changes we wand to make this
    //text we have done it using the setText function
    const[text,setText]=useState('')
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
            setText(newText);
            newText.length>0?props.showAlert("Converted to uppercase","success"):props.showAlert("Enter the text","danger");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
            setText(newText);
            newText.length>0?props.showAlert("Converted to lowercase","success"):props.showAlert("Enter the text","danger");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const handleClear=()=>{
        let newText='';
            setText(newText);
            props.showAlert("Text cleared ","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copeid to clipboard ","success");

    }
  return (<>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='my-2 mb-4'>{props.heading}</h1>
    <div className="form-group my-3">
    <textarea className="form-control"style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length==0} className='btn btn-dark mx-2 my-1'onClick={handleUpClick}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Convert to Uppercase</button>
    <button disabled={text.length==0} className='btn btn-dark mx-2 my-1'onClick={handleLoClick}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Convert to Lowercase</button>
    <button disabled={text.length==0} className='btn btn-dark mx-2 my-1'onClick={handleClear}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Clear</button>
    <button disabled={text.length==0} className='btn btn-dark mx-2 my-1'onClick={handleCopy}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Copytxt</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters <br />{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}