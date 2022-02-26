import Chapter from "./Chapter"
import ChapterPreview from "./ChapterPreview"
import HorizontalScroll from 'react-scroll-horizontal'
import LoginForm from './LoginForm'

const Chapters = ({ chapters, onChooseChild }) => {
  const noMoreChapters = { id: "-1", title: "This is the end of the story...", subtitle: "Or is it?", text: "It's time to write your own story!" }
  
  return (
    <div>
      {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter}/>
          ))}
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