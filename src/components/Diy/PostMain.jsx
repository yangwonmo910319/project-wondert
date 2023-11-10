import React from 'react';
import PostList from './PostList';

const PostMain = (props) => {

  return (
    <>
      <PostList tema={props.tema}/>
    </>
  )
}

export default PostMain;