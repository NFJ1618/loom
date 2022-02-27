import { useState } from 'react'
import '../styles/Chapter.css'
import LikeButton from './LikeButton'
import './ChapterForm.js'

const Chapter = ({ chapter, updateLikes, setRenderForm, forked, setForked }) => {
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
  }

  return (
    <div className='Chapter'>
        <h1>{chapter.title}</h1>
        <h2>{chapter.subtitle}</h2>
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