import { useState } from 'react'
import '../styles/Chapter.css'
import LikeButton from './LikeButton'
import './ChapterForm.js'

const Chapter = ({ chapter, updateLikes, setRenderForm, forked, setForked, setID, onDoubleClick}) => {
  const [liked, setLiked] = useState(false) // This needs to be initialised to true if liked by current user id.
  

  const onLikeClick = () => {
    setLiked(!liked)
    if (!liked) {
      updateLikes(chapter.id,1);
    }
    else {updateLikes(chapter.id,-1)}
  }

  const onForkClick = (id) => {
    setForked(true)
    setRenderForm(true)
    setID(id)
  }

  return (
    <div className='Chapter' onDoubleClick={() => onDoubleClick(chapter.id)}>
        <h2 style={{margin: "25px 0px"}}>{chapter.title}</h2>
        <h4 style={{"margin-bottom": "25px", "margin-top": "0px"}}>{chapter.subtitle}</h4>
        {
          (chapter.likes && chapter.likes[0] != -1 || !chapter.likes) && 
          <div>
            <LikeButton 
              text={`Like${liked ? 'd!' : ''} ${chapter.likes.length}`} 
              color={liked ? 'forestgreen': 'steelblue'} 
              onClick={onLikeClick}
            ></LikeButton>  {!forked && <LikeButton 
            text={`Fork`} 
            color={'orange'} 
            onClick={() => onForkClick(chapter.id)}
            ></LikeButton>}
          </div>
        }

        <p>{chapter.text}</p>
    </div>
  )
}

Chapter.propTypes = {

}

export default Chapter