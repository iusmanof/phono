import React from 'react'
import { useGetPostsQuery, useDeletePostMutation } from '../api/apiSlice'

function PostList() {
  const {
    data: posts,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetPostsQuery({ refetchOnMountOrArgChange: true })
  let postContent

  const [deletePost] = useDeletePostMutation()

  if (isGetSuccess) {
    postContent = posts.map((i: any) => {
      return (
        <div>
          <div>{i.title} {i.author}</div>
          <button onClick={() => deletePost(i.id)}>delete post {i.id}</button>
        </div>
      )
    })
  }


  return (<div>
    <div>PostContent: {postContent}</div>

  </div>)
}

export default PostList
