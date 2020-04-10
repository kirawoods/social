import React from "react";
import "./Header.css";
import testTubeLogo from "../images/testTubeLogo.PNG";
import avatar from "../images/avatar.png";
import points from "../images/points.png";
import { userData } from "../data/UserData";

export const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={testTubeLogo} />
      <h1 className="header-text">Advo</h1>
      <div className="menu-item-container">
        <p className="menu-item">To Do List</p>
        <p className="menu-item">Calendar</p>
        <p className="menu-item">Journal</p>
        <p className="menu-item">Suggestions</p>
        <p className="menu-item">Achievements</p>
        <p className="menu-item">Garden</p>
        <p className="menu-item">Manage Goals</p>
        <p className="menu-item">Blog</p>
      </div>
      <img className="points" src={points} />
      <p>{userData.points}</p>
      <img className="avatar" src={avatar} />
      <p className="username">{userData.username}</p>
    </div>
  );
};
