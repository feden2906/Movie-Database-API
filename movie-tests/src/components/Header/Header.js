import React, { useState, useEffect } from "react";
import "./Header.css";
import UserInfo from "../UserInfo/UserInfo";
  
const Header = () => {
    return (
        <header className="header">
            <UserInfo />
        </header>
    )
};

export default Header;
