import { useState } from 'react'
import './Chapter.css'
import LikeButton from './LikeButton'

const Chapter = ({ chapter, updateLikes }) => {
  const [liked, setLiked] = useState(false) // This needs to be initialised to true if liked by current user id.

  const onClick = () => {
    setLiked(!liked)
    if (!liked) {
      updateLikes(chapter.id,1);
    }
    else {updateLikes(chapter.id,-1)}
  }

  return (
    <div className='Chapter'>
        <h1>{chapter.title}</h1>
        <h2>{chapter.subtitle}</h2>
        {(chapter.likes && chapter.likes[0] != -1 || !chapter.likes) && <LikeButton text={`Like${liked ? 'd!' : ''} ${chapter.likes.length}`} color={liked ? 'forestgreen': 'steelblue'} onClick={onClick}/>}
        <p>{chapter.text}</p>
    </div>
  )
}

Chapter.propTypes = {

}

export default Chapter