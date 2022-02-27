import React, { useState } from "react";
import Chapter from "./Chapter";
import '../styles/ChapterForm.css'

const ChapterForm = ({ onSubmitChapter, setRenderForm, setForked, _id, setID }) => {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [blurb, setBlurb] = useState("");
    const [summary, setSummary] = useState("");
    const [cancel, setCancel] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (cancel) {
            setCancel(false)
            setRenderForm(false)
            setForked(false)
            return false
        }
        if (text.length == 0) {
            alert("Please add some text before you submit your chapter!")
            return false
        }
        if (blurb.length == 0 || blurb.length >= 50) {
            alert("Please write a blurb with less than 50 characters before submitting!")
            return false
        }
        const data = { text: text, title: title, subtitle: subtitle, blurb: blurb, summary: summary, parent: _id, contributor: "621a74643534549d05412cc2" }
        onSubmitChapter(data)
        setID(null)
        setRenderForm(false)
        setForked(false)
        return false
    }

    return (
    <div className="form-bg">
        <div className="form-heading">Add a chapter!</div>
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <textarea className="form-control textarea" type='text' placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Subtitle</label>
                <textarea className="form-control textarea" type='text' placeholder="Add Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Text</label>
                <textarea className="form-control textarea" type='text' placeholder="Add Text" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Blurb</label>
                <textarea className="form-control textarea" type='text' placeholder="Add Blurb" value={blurb} onChange={(e) => setBlurb(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Summary</label>
                <textarea className="form-control textarea" type='textarea' placeholder="Add Summary" value={summary} onChange={(e) => setSummary(e.target.value)}/>
            </div>
            <div className="button-holder">
                <input style={{"font-size": "1.25rem"}} className="btn btn-block" type='submit' value="Save Chapter" onClick={() => setCancel(false)}/><input 
                style={{"font-size": "1.25rem"}} className="btn btn-block" type='submit' value="Cancel" onClick={() => setCancel(true)}/>
            </div>
        </form>
    </div>
  ) 
}

export default ChapterForm