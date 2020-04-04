import React, { useEffect, useState }  from 'react'
import { useParams, withRouter } from "react-router-dom";
import PostItems from '../PostItems/PostItems'

const Posts = ({ history }) => {
  const { subReddit } = useParams()
  const [ postsData, setPostsData ] = useState({
      posts: [],
      isGetting: true,
      isGettingError: false,
    })

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`)
        const { data } = await response.json()
        const { children: posts } = data

        setPostsData({
          posts,
          isGetting: false,
        })
      } catch(err) {
        setPostsData({
          isGetting:false,
          isGettingError: true,
        })
      }      
    }
 
    fetchPosts()
  }, [])

  const handleLocationChange = location => {
    history.push(location)
  }
  

  return (
    <div className='Posts'>
      <PostItems
        {...postsData}
        handleLocationChange={handleLocationChange}
      />
    </div>
  )
}

export default withRouter(Posts)
