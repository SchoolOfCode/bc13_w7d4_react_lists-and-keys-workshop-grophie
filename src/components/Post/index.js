import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <h2>Title: {props.title}</h2> 
  <h3>Date: {props.date}</h3>
  <h3>Author: {props.author}</h3>
  <p>{props.text}</p>
  <p style={{color: 'white'}}>{props.highlights}</p>
  <img alt={props.imgalt} width={'80%'} src = {props.imglink}/>
  </article>;
}

export default Post;
