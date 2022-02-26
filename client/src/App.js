import { useState } from 'react'
import Pages from "./components/Page";
import '../src/App.css'


function App() {
  const [ pages, setPages ] = useState([
    {
      //summary_short: 'This is a brief summary',
      //summary_long: 'This is a much longer summary',
      title: 'This is the page title',
      subtitle: 'This is the page subtitle',
      text: 'This is the text of the page',
      //likes: 0,
      //children: 
    }
  ])

  return (
    <div className="App">
      {pages.length > 0 ? <Pages pages={pages}/> : "No current pages to display"}
    </div>
  );
}

export default App;
