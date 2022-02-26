import { useState } from 'react'
import Chapters from "./components/Chapters";


function App() {
  const [ chapters, setchapters ] = useState([
    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: 0,
      title: 'This is the chapter title',
      subtitle: 'This is the chapter subtitle',
      text: 'This is the text of the chapter',
      //likes: 0,
      children: [
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: 2,
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            //likes: 0,
            //children: 
            },
        ] 
    },

    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: 1,
      title: 'This is the chapter title',
      subtitle: 'This is the chapter subtitle',
      text: 'This is the text of the chapter',
      //likes: 0,
      children: [
          {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: 3,
          title: 'This is the chapter title',
          subtitle: 'This is the chapter subtitle',
          text: 'This is the text of the chapter',
          //likes: 0,
          //children: 
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: 4,
           title: 'This is the chapter title',
           subtitle: 'This is the chapter subtitle',
           text: 'This is the text of the chapter',
           //likes: 0,
           //children: 
          },
                    {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: 3,
          title: 'This is the chapter title',
          subtitle: 'This is the chapter subtitle',
          text: 'This is the text of the chapter',
          //likes: 0,
          //children: 
          },
          {
           blurb: 'This is a brief summary',
           summary: 'This is a much longer summary',
           id: 4,
           title: 'This is the chapter title',
           subtitle: 'This is the chapter subtitle',
           text: 'This is the text of the chapter',
           //likes: 0,
           //children: 
          },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: 3,
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            //likes: 0,
            //children: 
            },
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: 4,
            title: 'This is the chapter title',
            subtitle: 'This is the chapter subtitle',
            text: 'This is the text of the chapter',
            //likes: 0,
            //children: 
          },
        ] 
    },
  ])

  return (
    <div className="App">
      <Chapters chapters={chapters}/>
    </div>
  );
}

export default App;
