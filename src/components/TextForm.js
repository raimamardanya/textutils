import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();// for conver text to upper case
        //setText("you have clicked on handleUpClick") // click korle you have clicked on handleUpClick et alikha asbe box er moddhe
        setText(newText) // text likhte parbo box er moddhe
        props.showAlert("Converted to uppercase!", "success");// (alert.js code) for shoing alert when convert uppercase
    }

    const handleLoClick = () =>{
        //console.log("Lower was clicked" + text);
        let newText = text.toLowerCase();// for conver text to Lower case
        //setText("you have clicked on handleUpClick") // click korle you have clicked on handleUpClick et alikha asbe box er moddhe
        setText(newText) // text likhte parbo box er moddhe
        props.showAlert("Converted to lowercase!", "success");// (alert.js code) for shoing alert when convert lowercase

    }

    const handleClearClick = () =>{
        //console.log("Lower was clicked" + text);
        let newText = '';// for clear text
        setText(newText) // text likhte parbo box er moddhe
        props.showAlert("Clear the text!", "success");// (alert.js code) for shoing alert when clear text

    }

    //copy text code 
    const handleCopy = () =>{
        console.log("I am a copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy the text!", "success");// (alert.js code) for shoing alert when copy text

    }

    //clear extra space
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!", "success");
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value) // Enter text here er sathe box er moddya aro text add korte parbo
    }
const[text, setText] = useState(''); // taken from HookState

  return (
    <>
    {/*vdo - 7 */}
    <div className='container' style={{color: props.mode ==='dark'?'white':'#180433'}}>
            {/*ai code tar dara react er vetor box ta banano holo jetate text likhbo */}
            <h1>{props.heading}</h1> {/* Enter the text to analyze below ei heading ta elo {props.heading} likhte  */}
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'light', color:props.mode ==='dark'?'white':'#180433'}} id="myBox" rows="8"></textarea>
            </div>

            {/*copy from bootstrap */}
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button> {/*For upper case */}
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button> {/*For Lower case */}
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button> {/*For clear  */}
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> {/*For clear  */}
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button> {/*For remove Extra spaces  */}

    </div>

    {/*vdo - 8 */}
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#180433'}}>
        <h2>Your text summary</h2>
        <p>{text.split("").length} words and {text.length} character </p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
