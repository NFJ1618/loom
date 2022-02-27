import Chapter from "./Chapter"
import ChapterPreview from "./ChapterPreview"
import HorizontalScroll from 'react-scroll-horizontal'
import ChapterForm from "./ChapterForm"
import LoginForm from './LoginForm'
import { useState } from "react"
import { set } from "react-hook-form"

const Chapters = ({ chapters, onChooseChild, updateLikes, onSubmitChapter, onDoubleClick }) => {
  const noMoreChapters = { id: "-1", title: "This is the end of the story...", subtitle: "Or is it?", text: "It's time to write your own story!", likes: [-1] }
  const [renderForm, setRenderForm] = useState(false)
  const [forked, setForked] = useState(false)
  const [id, setID] = useState(null)

  return (
    <div>
      {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} updateLikes={updateLikes} setRenderForm={setRenderForm} forked={forked} setForked={setForked} setID={setID} onDoubleClick={onDoubleClick}/>
          ))}
      {renderForm && <ChapterForm onSubmitChapter={onSubmitChapter} setRenderForm={setRenderForm} setForked={setForked} _id={id} setID={setID}/>}
      console.log(chapters)
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