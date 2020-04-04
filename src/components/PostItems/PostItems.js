import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import PostItem from '../PostItem/PostItem'

const PostItems = ({
  posts = [],
  isGetting = false,
  isGetitngError = false,
  handleLocationChange = () => {},
}) => {
  return (
    <div className='PostItems'>
      {
        isGetting && '...isLoading'
      }
      {
        !isGetting && !isGetitngError && (
          posts.map(post => {
            let postData = get(post, 'data')
            let postId = get(postData, 'id')
      
            return (
              <PostItem
                key={postId}
                postData={postData}
                handleLocationChange={handleLocationChange}
              />
            )
          })
        )
      }
    </div>
  )
}

PostItems.propTypes = {
  posts: PropTypes.array,
  isGetting: PropTypes.bool,
  isGettingError: PropTypes.bool,
  handleLocationChange: PropTypes.func,
}

export default PostItems
