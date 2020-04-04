import './PostDetails.css'
import React, { useEffect, useState }  from 'react'
import { useParams } from "react-router-dom";
import PostDetail from '../PostDetail/PostDetail'

const PostDetails = () => {
  const { subReddit, id } = useParams()
  const [ postDetailData, setPostDetailData ] = useState({
      postDetail: {},
      postComments: [],
      isGetting: true,
      isGettingError: false,
    })

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(`https://www.reddit.com/r/${subReddit}/${id}.json`)
          const [ postDetailRes, postCommentsRes ]= await response.json()

          const { data: postDetailData } = postDetailRes
          const { data: postCommentsData } = postCommentsRes

          const { children: postDetailArr } = postDetailData
          const { children: postComments } = postCommentsData
          const [ postDetail ] = postDetailArr
  
          setPostDetailData({
            postDetail,
            postComments,
            isGetting: false,
          })
        } catch(err) {
          setPostDetailData({
            isGetting: false,
            isGettingError: true,
          })
        }      
      }
   
      fetchPosts()
    }, [])

  return (
    <div className='PostDetails'>
      <PostDetail {...postDetailData}/>
    </div>
  )
}

export default PostDetails
