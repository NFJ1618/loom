import { useState } from 'react'
import Chapters from "./components/Chapters";


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

  const onDoubleClick = (id) => {
    console.log(chapters)
    const ind = chapters.findIndex(elem => (elem == id));
    setChapters(chapters.slice(0,ind+1))
    console.log(chapters)
  }

  return (
    <div className="App">
      <Chapters chapters={chapters} onChooseChild={onChooseChild} updateLikes={updateLikes} onSubmitChapter={onSubmitChapter} onDoubleClick={onDoubleClick}/>
    </div>
  );

}

export default App
