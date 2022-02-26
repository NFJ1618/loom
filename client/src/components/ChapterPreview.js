import './Chapter.css'

const ChapterPreview = ( { chapter, onChooseChild } ) => {
  return (
    <div className='Chapter-preview' onClick={() => onChooseChild(chapter)}>
        <h1>{chapter.blurb}</h1>
        <p>{chapter.summary}</p>
    </div>
  )
}

export default ChapterPreview