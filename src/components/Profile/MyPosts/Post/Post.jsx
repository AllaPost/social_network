import React from "react";
import s from "./Post.module.css";

const Posts = (props) => {

  return (
    <div className={s.item}>
      <img
        src="https://images.unsplash.com/photo-1500259571355-332da5cb07aa?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {props.message}
      <div>
        {" "}
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Posts;
