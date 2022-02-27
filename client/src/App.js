import { useState, useEffect } from 'react'
import Chapters from "./components/Chapters";
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
  }])

  const getChapter = (chapterID) => {
    axios.get("http://localhost:5000/chapters/getChapter/" + chapterID).then((response) => {
      console.log(response.data);
      setChapters([...chapters, response.data]);
    })
  }

  useEffect(() => {
    getChapter("621ac5c8688d17ae2bb23c21");
  }, []);

  const onChooseChild = (id) => {
    //const next = chapters[chapters.length - 1].children.find(elem => (elem.id == id));
    getChapter(id);
  }

  const updateLikes = (id,v) => {
    if (v == 1) {
      chapters.find(elem => (elem.id == id)).likes.push(0)
    }
    else {
      chapters.find(elem => (elem.id == id)).likes.pop()
    }
  }

  const onSubmitChapter = (data) => {

  }

  return (
    <div className="App">
      <Chapters chapters={chapters} onChooseChild={onChooseChild} updateLikes={updateLikes} onSubmitChapter={onSubmitChapter}/>
    </div>
  );

}

export default App
