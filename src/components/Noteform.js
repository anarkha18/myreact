import React, { useState } from 'react'
export default function Noteform() {
    const handleclick = () => {
        let newtxt = text.toUpperCase();
        setText(newtxt)
    }
    const handleclear = () => {
        let newtxt = '';
        setText(newtxt)
    }
    const handlechange = (event) => {
        setText(event.target.value)
    }
    const handlecopy = () => {
        var text = document.getElementById("notetxt");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='my-3'>
                <form>
                    <h1>YOUR NOTES</h1>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name: </label>
                        <input type="text" className="form-control" id="name" placeholder="Full Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="notetxt" className="form-label">Your Note:</label>
                        <textarea className="form-control" id="notetxt" rows="3" value={text} onChange={handlechange} placeholder='Write your note here...'></textarea>
                    </div>
                    <button type="button" onClick={handleclick} className="btn btn-primary">ADD NOTE</button>
                    <button type="button" onClick={handleclear} className="btn btn-primary mx-2">CLEAR TEXT</button>
                    <button type="button" onClick={handlecopy} className="btn btn-primary mx-2">COPY</button>
                </form>
            </div>
            <div className="MY-3">
                <h3>YOUR SUMMARY & PREVIEW</h3>
                <div style={{ "display": "inline-block", "width": "50%" }}>
                    <p>{text}</p>
                </div>
                <div style={{ "display": "inline-block" }}>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minitues read</p>
                </div>
            </div>
        </>
    )
}
