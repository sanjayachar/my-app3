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
        <h1>{props.heading}</h1>
    <div className="form-group my-3">
    <textarea className="form-control"style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-dark mx-2'onClick={handleUpClick}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Convert to Uppercase</button>
    <button className='btn btn-dark mx-2'onClick={handleLoClick}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Convert to Lowercase</button>
    <button className='btn btn-dark mx-2'onClick={handleClear}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Clear</button>
    <button className='btn btn-dark mx-2'onClick={handleCopy}style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}}>Copytxt</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} charecters <br />{0.008*text.split(" ").length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
        <p>Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the United States and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.
        Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the United States and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.
        Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the United States and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.
        Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the United States and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.
        Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the United States and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.
        </p>
    </div>
    </>
  )
}