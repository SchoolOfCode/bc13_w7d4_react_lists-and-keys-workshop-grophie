import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <h2>{props.title}</h2> 
  <h3>{props.date}</h3>
  <h3>{props.author}</h3>
  <p>{props.text}</p>
 
    {(props.highlights).map((highlight, index) =>
     <li key = {index}>{highlight}</li>
     )}

  <img alt={props.imgalt} width={'80%'} src = {props.imglink}/>
  </article>;
}

export default Post;
