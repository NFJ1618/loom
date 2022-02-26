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
      likes: 0,
      children: [
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "2",
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            likes: 0,
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
      likes: 0,
      children: [
          {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: "3",
          title: 'This is the chapter title',
          subtitle: 'This is the chapter subtitle',
          text: 'This is the text of the chapter',
          likes: 0,
          children: []
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: "4",
           title: 'This is the chapter title',
           subtitle: 'This is the chapter subtitle',
           text: 'This is the text of the chapter',
           likes: 0,
           children:  []
          },
                    {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: "5",
          title: 'This is the chapter title',
          subtitle: 'This is the chapter subtitle',
          text: 'This is the text of the chapter',
          likes: 0,
          children: [],
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: "6",
           title: 'This is the chapter title',
           subtitle: 'This is the chapter subtitle',
           text: 'This is the text of the chapter',
           likes: 0,
           children: []
          },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "7",
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            likes: 0,
            children: []
            },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: "8",
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            likes: 0,
            children: []
          },
        ] 
    },
  ])

  const onChooseChild = (id) => {
    const next = chapters[chapters.length - 1].children.find(elem => (elem.id == id));
    setChapters([ ...chapters, next ])
  }

  return (
    <div className="App">
      <Chapters chapters={chapters} onChooseChild={onChooseChild}/>
    </div>
  );
}

export default App;
