import { useState } from 'react'
import Pages from "./components/Pages";


function App() {
  const [ pages, setPages ] = useState([
    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: 0,
      title: 'This is the page title',
      subtitle: 'This is the page subtitle',
      text: 'This is the text of the page',
      //likes: 0,
      children: [
          {
            blurb: 'This is a brief summary',
            summary: 'This is a much longer summary',
            id: 2,
            title: 'This is the page title',
            subtitle: 'This is the page subtitle',
            text: 'This is the text of the page',
            //likes: 0,
            //children: 
            },
        ] 
    },

    {
      blurb: 'This is a brief summary',
      summary: 'This is a much longer summary',
      id: 1,
      title: 'This is the page title',
      subtitle: 'This is the page subtitle',
      text: 'This is the text of the page',
      //likes: 0,
      children: [
          {
          blurb: 'This is a brief summary',
          summary: 'This is a much longer summary',
          id: 3,
          title: 'This is the page title',
          subtitle: 'This is the page subtitle',
          text: 'This is the text of the page',
          //likes: 0,
          //children: 
          },
        ] 
    },
  ])

  return (
    <div className="App">
      <Pages pages={pages}/>
    </div>
  );
}

export default App;
