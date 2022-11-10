import React from 'react';

import './index.css';

function Post(props) {
  return <article postId = {props.postId}>{props.title} {props.date} {props.author} {props.text} {props.highlights} {props.image}</article>;
}

export default Post;
