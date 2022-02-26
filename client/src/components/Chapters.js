import Chapter from "./Chapter"
import ChapterPreview from "./ChapterPreview"

const Chapters = ({ chapters }) => {
  return (
    <div>
    {chapters.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter}/>
        ))}
    {chapters[chapters.length - 1].children.map((child) => (
        <ChapterPreview key={child.id} chapter={child}></ChapterPreview>
        ))}
    </div>
  )
}

export default Chapters