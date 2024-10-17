import React, { useState, useEffect } from "react";
import "./Navbar.css";
import displayIcon from "../../assets/icons_FEtask/Display.svg";
import downIcon from "../../assets/icons_FEtask/down.svg";
import FilterCard from '../FilterCard/FilterCard'
const Navbar = ({onDropdownSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState("status");

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
      onDropdownSelect(key);
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".dropdown-container") === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="filter-box" onClick={handleToggle}>
        <img src={displayIcon} alt="FilterIcon" className="icon filter-icon" />
        <span className="filter-text">Display</span>
        <img src={downIcon} alt="Arrow Down Icon" className={`icon arrow-icon ${isOpen ? "rotate" : ""}`} />
        {isOpen && (
          <FilterCard/>
        )}
      </div>
    </div>
  )
}

export default Navbar