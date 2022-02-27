import { useState } from 'react'
import Chapters from "./components/Chapters";
import LoginForm from "./components/LoginForm";
import ChapterForm from './components/ChapterForm';
import Home from './components/Home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [ chapters, setChapters ] = useState([
    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: "0",
      title: 'This is the chapter title',
      subtitle: 'This is the chapter subtitle',
      text: 'This is the text of the chapter',
      likes: [],
      children: [
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "2",
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            likes: [],
            children: []
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
      likes: [],
      children: [
          {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: "3",
          title: 'This is the chapter title',
          subtitle: 'This is the chapter subtitle',
          text: 'This is the text of the chapter',
          likes: [],
          children: []
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: "4",
           title: 'This is the chapter title',
           subtitle: 'This is the chapter subtitle',
           text: 'This is the text of the chapter',
           likes: [],
           children:  []
          },
                    {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: "5",
          title: 'This is the chapter title',
          subtitle: 'This is the chapter subtitle',
          text: 'This is the text of the chapter',
          likes: [],
          children: [],
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: "6",
           title: 'This is the chapter title',
           subtitle: 'This is the chapter subtitle',
           text: 'This is the text of the chapter',
           likes: [],
           children: []
          },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "7",
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            likes: [],
            children: []
            },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "8",
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            likes: [],
            children: []
          },
        ] 
    },
  ])

  const onChooseChild = (id) => {
    const next = chapters[chapters.length - 1].children.find(elem => (elem.id == id));
    setChapters([ ...chapters, next ])
  }

  const updateLikes = (id,v) => {
    if (v == 1)
      chapters.find(elem => (elem.id == id)).likes.push(0)
    else
      chapters.find(elem => (elem.id == id)).likes.pop()
  }

  const onSubmitChapter = (data) => {

  }
  
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/groups" element={<Chapters chapters={chapters} onChooseChild={onChooseChild} 
            updateLikes={updateLikes} onSubmitChapter={onSubmitChapter}/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
  /*
  return (
    <div className="App">

      <Chapters chapters={chapters} onChooseChild={onChooseChild} updateLikes={updateLikes} onSubmitChapter={onSubmitChapter}/>
    </div>
  );*/

}

export default App
