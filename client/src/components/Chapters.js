import Chapter from "./Chapter"
import ChapterPreview from "./ChapterPreview"
import HorizontalScroll from 'react-scroll-horizontal'
import ChapterForm from "./ChapterForm"
import LoginForm from './LoginForm'
import { useState } from "react"
import { set } from "react-hook-form"
import { Link } from "react-router-dom"

const Chapters = ({ chapters, onChooseChild, updateLikes, onSubmitChapter, onDoubleClick }) => {
  const noMoreChapters = { id: "-1", title: "This is the end of the story...", subtitle: "Or is it?", text: "It's time to write your own story!", likes: [-1], contributor: {username: null} }
  const [renderForm, setRenderForm] = useState(false)
  const [forked, setForked] = useState(false)
  const [id, setID] = useState(null)

  return (
    <div>
      <div className="topnav" id="myTopnav">
                <Link to="/home">Home</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/groups">Groups</Link>
                <Link to="/logout" className="log">Log out</Link>
      </div>
      {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} updateLikes={updateLikes} setRenderForm={setRenderForm} forked={forked} setForked={setForked} setID={setID} onDoubleClick={onDoubleClick}/>
          ))}
      {renderForm && <ChapterForm onSubmitChapter={onSubmitChapter} setRenderForm={setRenderForm} setForked={setForked} _id={id} setID={setID}/>}
      {chapters[chapters.length - 1].children.length > 0 ?
      <HorizontalScroll
        pageLock = {true}
        reverseScroll = {true}
        style = {{ width: `100%`, height: `50vh` }}
      >
        {chapters[chapters.length - 1].children.map((child) => (
                <ChapterPreview key={child.id} id={child.id} likes={child.likes} blurb={child.blurb} summary={child.summary} onChooseChild={onChooseChild}></ChapterPreview>
            ))}
      </HorizontalScroll> :
      <Chapter chapter={noMoreChapters}/>
      }
      
    </div>
  )
}

export default Chapters