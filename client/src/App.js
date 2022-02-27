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
    summary: 'This is clearly a much longer summary',
    id: "621aeb86573732e27fbcb89b",
    title: 'The Most Meaningful Text',
    subtitle: 'Truly artistic prose',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
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

  return (
    <div className="App">
      <Chapters chapters={chapters} onChooseChild={onChooseChild} updateLikes={updateLikes} onSubmitChapter={onSubmitChapter}/>
    </div>
  );

}

export default App
