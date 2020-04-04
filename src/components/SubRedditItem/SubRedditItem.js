import './SubRedditItem.css'
import React from 'react'
import PropTypes from 'prop-types'
import getMany from '../../utilities/getMany'

const SubRedditItem = ({
  subRedditData = {},
  handleLocationChange = () => {},
}) => {
  const [
    subRedditNamePrefixed,
    subRedditName,
  ] = getMany(subRedditData, [
    'display_name_prefixed',
    'display_name',
  ])

  return (
    <div
      className='SubRedditItem'
      onClick={() => handleLocationChange(subRedditName)}
    >  
      <div>
        {subRedditNamePrefixed}
      </div>
    </div>
  )
}

SubRedditItem.propTypes = {
  subRedditData: PropTypes.object,
  handleLocationChange: PropTypes.func,
}

export default SubRedditItem
