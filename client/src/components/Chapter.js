import './Chapter.css'
import './ChapterForm.js'

const Chapter = ({ chapter }) => {
  return (
    <div className='Chapter'>
        <h1>{chapter.title}</h1>
        <h2>{chapter.subtitle}</h2>
        <p>{chapter.text}</p>
    </div>
  )
}

export default Chapter