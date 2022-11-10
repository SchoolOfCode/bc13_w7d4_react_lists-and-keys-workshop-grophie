import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main">

{samplePosts.map((post) => {
 console.log(`this is out mapping function ${post.author}`);
  return (<Post postId = {post.postId}
  title = {post.title}
  date = {post.date}
  author = {post.author}
  text = {post.text}
  highlights = {post.highlights}
  image = {post.image}
  />)
})}

</main>
}

export default Main;
