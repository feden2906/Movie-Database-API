import React from "react";
import "./UserInfo.css";
import profile from "./img/profile.svg";

const UserInfo = () => {
  return (
    <div className="user__info">
      <a href="#" className ="user__link">
        <img className="user__img" src={profile} alt={"profile"}></img>
        Hello, stranger!
      </a>
    </div>
  );
};

export default UserInfo;
