import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <h2>{props.title}</h2> 
  <h3>{props.date}</h3>
  <h3>{props.author}</h3>
  <img alt={props.imgalt} width={'80%'} src = {props.imglink}/>

  {(props.highlights).map((highlight, index) =>
     <li key = {index}>{highlight}</li>)}

  <p>{props.text}</p>
   </article>;
}

export default Post;
