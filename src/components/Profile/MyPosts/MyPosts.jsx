import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Post";

const MyPosts = (props) => {

  let posts = [
    { id: 1, message: "Hi, how are you",  likesCount: 0},
    { id: 2, message: "It's my first post", likesCount: 23},
    { id: 3, message: "blalaall", likesCount: 5},
    { id: 4, message: "dadadaad", likesCount: 4}
  ];

  let postsElement = 
  posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/>);

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement} 
        </div>
    </div>
  );
};

export default MyPosts;
