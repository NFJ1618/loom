import Chapter from "./Chapter"
import ChapterPreview from "./ChapterPreview"
import HorizontalScroll from 'react-scroll-horizontal'

const Chapters = ({ chapters, onChooseChild }) => {
  return (
    <div>
      {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter}/>
          ))}
      {chapters[chapters.length - 1].children.length > 0 &&
      <HorizontalScroll
        pageLock = {true}
        reverseScroll = {true}
        style = {{ width: `100%`, height: `50vh` }}
      >
        {chapters[chapters.length - 1].children.map((child) => (
                <ChapterPreview key={child.id} chapter={child} onChooseChild={onChooseChild}></ChapterPreview>
            ))}
      </HorizontalScroll>
      }

    </div>
  )
}

export default Chapters