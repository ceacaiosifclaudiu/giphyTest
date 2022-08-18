import React from "react";
import "./Input.css";
import SearchIcon from "@mui/icons-material/Search";

const Input = ({ handleInput, handleSearch }) => {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Search all the GIFS and Stickers here"
        onChange={handleInput}
      />
      <div className="searchIcon">
        <SearchIcon onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Input;
