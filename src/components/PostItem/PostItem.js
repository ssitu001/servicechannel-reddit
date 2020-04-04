import './PostItem.css'
import React from 'react'
import PropTypes from 'prop-types'
import getMany from '../../utilities/getMany'
import { useRouteMatch } from "react-router-dom"

const PostItem = ({
  postData = {},
  handleLocationChange = () => {},
}) => {
  const { url } = useRouteMatch()

  const [
    id = '',
    title = '',
    author = '',
    thumbnail = '',
  ] = getMany(postData, [
    'id',
    'title',
    'author',
    'thumbnail',
  ])

  return (
    <div
      className='PostItem'
      onClick={() => handleLocationChange(`${url}/${id}`)}
    >
      <div className='postItemContent'>
        <p>Posted by u/{author}</p>
        <h3>{title}</h3>
        <img src={thumbnail} alt='' />
      </div>
    </div>
  )
}

PostItem.propTypes = {
  postData: PropTypes.object,
  handleLocationChange: PropTypes.func,
}

export default PostItem
