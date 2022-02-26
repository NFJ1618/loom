import '../styles/Chapter.css'
import PropTypes from 'prop-types'

const ChapterPreview = ( { likes, blurb, summary, id, onChooseChild } ) => {
  return (
    <div className='Chapter-preview' onClick={() => onChooseChild(id)}>
        <h1>{blurb}</h1>
        <h2>{likes.length}</h2>
        <p>{summary}</p>
    </div>
  )
}

ChapterPreview.propTypes = {
  likes: PropTypes.array.isRequired,
  blurb: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired, // Check id type
  onChooseChild: PropTypes.func.isRequired,
}

export default ChapterPreview