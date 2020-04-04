import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import SubRedditItem from '../SubRedditItem/SubRedditItem.js'

const SubRedditItems = ({
  subReddits = [],
  isGetting = false,
  isGettingError = false,
  handleLocationChange = () => {},
}) => {
  return (
    <div className='SubRedditItems'>
      {
        isGetting && '...isLoading'
      }
      {
        !isGetting && !isGettingError && (
          subReddits.map(subReddit => {
            let subRedditData = get(subReddit, 'data')
            let subRedditId = get(subRedditData, 'id')
      
            return (
              <SubRedditItem
                key={subRedditId}
                subRedditData={subRedditData}
                handleLocationChange={handleLocationChange}
              />
            )
          })
        )
      }
    </div>
  )
}

SubRedditItems.propTypes = {
  subReddits: PropTypes.array,
  isGetting: PropTypes.bool,
  isGettingError: PropTypes.bool,
  handleLocationChange: PropTypes.func,
}

export default SubRedditItems
