import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
        <ProfileInfo/>
      <MyPosts />
    </div>
  );
};

export default Profile;
