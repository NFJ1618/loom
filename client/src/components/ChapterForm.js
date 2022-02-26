import React from "react";
import { useForm } from "react-hook-form";
import './ChapterForm.css'

const sendData = (data) => {
    console.log(data);
}

const ChapterForm = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className='Chapter-form'>
            <form onSubmit={handleSubmit(data => sendData(data))}>
                <h3 style={{marginLeft: 10}}>Title</h3>
                <input
                    type="text"
                    className="form-input"
                    {...register("title", {required: false})} />
                <h3 style={{marginLeft: 10}}>Subtitle</h3>
                <input
                    type="text"
                    className="form-input"
                    {...register("subtitle", {required: false})} />
                <h3 style={{marginLeft: 10}}>Text</h3>
                <textarea
                    type="text"
                    className="form-input"
                    rows="15"
                    {...register("chaptertext", {required: true})} />
                <h3 style={{marginLeft: 10}}>Blurb</h3>
                <input
                    type="text"
                    className="form-input"
                    {...register("blurb", {required: true})} />
                <h3 style={{marginLeft: 10}}>Chapter summary</h3>
                <textarea
                    type="text"
                    className="form-input"
                    rows="15"
                    {...register("summary", {required: false})} />
                    <br></br>
                <button class="form-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ChapterForm