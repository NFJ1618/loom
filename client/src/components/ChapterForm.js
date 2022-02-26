import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Chapter from "./Chapter";
import './ChapterForm.css'

const ChapterForm = ({ onSubmitChapter }) => {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [blurb, setBlurb] = useState("");
    const [summary, setSummary] = useState("");

    const onSubmit = (e) => {
        console.log(e)
        if (text.length == 0) {
            alert("Please add some text before you submit your chapter!")
            return
        }
        if (blurb.length == 0 || blurb.length >= 50) {
            alert("Please write a blurb with less than 50 characters before submitting!")
        }
    
        const data = { text: text, title: title, subtitle: subtitle, blurb: blurb, summary: summary }
        onSubmitChapter(data)
    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Title</label>
            <input type='text' placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Subtitle</label>
            <input type='text' placeholder="Add Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Text</label>
            <textarea type='text' placeholder="Add Text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Blurb</label>
            <input type='text' placeholder="Add Blurb" value={blurb} onChange={(e) => setBlurb(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Summary</label>
            <textarea type='textarea' placeholder="Add Summary" value={summary} onChange={(e) => setSummary(e.target.value)}/>
        </div>

        <input className="btn btn-block" type='submit' value="Save Chapter" onChange={(e) => onSubmit(e.target.value)}/>
    </form>
  )
}

export default ChapterForm