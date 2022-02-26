import './Chapter.css'

const ChapterPreview = ( { chapter } ) => {
  return (
    <div className='Chapter-preview'>
        <h1>{chapter.blurb}</h1>
        <p>{chapter.summary}</p>
    </div>
  )
}

export default ChapterPreview