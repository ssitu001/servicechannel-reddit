import './PostDetail.css'
import React from 'react'
import PropTypes from 'prop-types'
import getMany from '../../utilities/getMany'

const PostDetail = ({
  postDetail = {},
  isGetting = false,
  isGettingError = false,
  className = ''
}) => {
  const [
    author = '',
    title = '',
    thumbnail = '',
    text = '',
  ] = getMany(postDetail, [
    'data.author',
    'data.title',
    'data.thumbnail',
    'data.selftext',
  ])

  return (
    <div className='PostDetail'>
      {
        isGetting && '...isLoading'
      }

      {
        !isGetting && !isGettingError && (
          <div className={className}>
            {
              author && (
                <p>Posted by u/{author}</p>
              )
            }
            
            <h3>{title}</h3>
            <img src={thumbnail} alt='' />
            <p>{text}</p>
          </div>
        )
      }
    </div>
  )
}

PostDetail.propTypes = {
  postDetail: PropTypes.object,
  isGetting: PropTypes.bool,
  isGettingError: PropTypes.bool,
  className: PropTypes.string,
}

export default PostDetail
