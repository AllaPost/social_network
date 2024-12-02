import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="s.descriptionBlock">ava + description</div>
    </div>
  );
};

export default ProfileInfo;
