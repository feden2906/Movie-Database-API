import React, { useState, useEffect } from "react";
import "./Header.css";
import UserInfo from "../UserInfo/UserInfo";
// import SearchInput from "../SearchInput/SearchInput";
  
const Header = (props) => {
    return (
        <header className="header">
            <UserInfo />
            {/* <SearchInput {...props} /> */}
        </header>
    )
};

export default Header;
