import React, { useState, useEffect } from 'react'
import { withRouter} from "react-router-dom"
import SubRedditItems from '../SubRedditItems/SubRedditItems'

const Home = ({ history }) => {
  const [ subRedditData, setSubRedditData ] = useState({
    isGetting: true,
    isGettingError: false,
    subReddits: [],
  })

  useEffect(() => {
    const fetchSubReddits = async () => {
      try {
        const response = await fetch(`https://www.reddit.com/subreddits.json`)
        const subRedditRes = await response.json()
        const { data } = subRedditRes
        const { children: subReddits } = data

        setSubRedditData({
          subReddits,
          isGetting: false,
        })
      } catch (err) {
        setSubRedditData({
          isGetting: false,
          isGettingError: true,
        })
      }
    }

    fetchSubReddits()
  }, [])

  const handleLocationChange = location => {
    history.push(location)
  }

  return (
    <div className='Home'>
      <SubRedditItems
        {...subRedditData}
        handleLocationChange={handleLocationChange}
      />
    </div>
  )
}

export default withRouter(Home)
