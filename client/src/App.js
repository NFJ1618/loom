import { useState, useEffect } from 'react'
import Chapters from "./components/Chapters";
import './App.css'
import LoginForm from "./components/LoginForm";
import ChapterForm from './components/ChapterForm';
import Home from './components/Home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
const axios = require('axios');

function App() {
  /*const [ chapters, setChapters ] = useState([
    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: "0",
      title: 'This is the chapter title',
      subtitle: 'This is the chapter subtitle',
      text: 'This is the text of the chapter',
      likes: [],
      contributor: "John",
      children: [
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "2",
            text: 'This is the text of the chapter',
            likes: [],
            },
        ] 
    },

    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: "1",
      title: 'This is the chapter title',
      subtitle: 'This is the chapter subtitle',
      text: 'This is the text of the chapter',
      contributor: "John",
      likes: [],
      children: [
          {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: "3",
          text: 'This is the text of the chapter',
          contributor: "John",
          likes: [],
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: "4",
           text: 'This is the text of the chapter',
           contributor: "John",
           likes: [],
          },
          {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: "5",
          text: 'This is the text of the chapter',
          contributor: "John",
          likes: [],
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: "6",
           text: 'This is the text of the chapter',
           contributor: "John",
           likes: [],
          },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "7",
            text: 'This is the text of the chapter',
            contributor: "John",
            likes: [],
            },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "8",
            text: 'This is the text of the chapter',
            contributor: "John",
            likes: [],
          },
        ] 
    },
  ])*/
  const [ chapters, setChapters ] = useState([{
    blurb: 'This is a brief summary',
    summary: 'This is clearly a much longer summary',
    id: "621aeb86573732e27fbcb89b",
    title: 'HOTH: A Year Apart',
    subtitle: 'A truly legendary redemption arc',
    text: "One year ago, we participated in HO(ff)TH. It was tragic. We knew nothing, We were a meme. However, things are different now and we actually made something. Colossal W lads!",
    likes: ["a", "b", "c"],
    contributor: {
      username: "MrDeez",
      id: "621aea52573732e27fbcb898"
    },
    children: [] 
  }])

  const getChapter = (chapterID) => {
    axios.get("http://localhost:5000/chapters/getChapter/" + chapterID).then((response) => {
      console.log(response.data);
      setChapters([...chapters, response.data]);
    })
  }

  const onChooseChild = (id) => {
    //const next = chapters[chapters.length - 1].children.find(elem => (elem.id == id));
    getChapter(id);
  }

  const updateLikes = (id,v) => {
    if (v == 1) {
      chapters.find(elem => (elem.id == id)).likes.push(0)
      axios.post('http://localhost:5000/chapters/addLike', {chapterId: id, userID: "621a74643534549d05412cc2"})
      .then(response => {})
    }
    else {
      chapters.find(elem => (elem.id == id)).likes.pop()
      axios.post('http://localhost:5000/chapters/undoLike', {chapterId: id, userID: "621a74643534549d05412cc2"})
      .then(response => {})
    }
  }

  const onSubmitChapter = (data) => {
    axios.post('http://localhost:5000/chapters/addChapter', data).then(response => {
      if (response.data == "error") {console.log("error")}
      else {
        const newChapter = response.data;
        getChapter(newChapter);
      }
    })
  }

  const onDoubleClick = (id) => {
    const ind = chapters.findIndex((elem) => elem.id == id);
    if (ind+1 != chapters.length)
      setChapters(chapters.slice(ind+1))
  }
  
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/groups" element={<Chapters chapters={chapters} onChooseChild={onChooseChild} 
            updateLikes={updateLikes} onSubmitChapter={onSubmitChapter} onDoubleClick={onDoubleClick}/>} />
            <Route exact path="/logout" element={<Home />} />
            <Route exact path="/signup" element={<SignupForm />} />
          </Routes>
        </BrowserRouter>
      </div>
  )

}

export default App
