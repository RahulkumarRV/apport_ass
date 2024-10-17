import React, { useState, useEffect } from "react";
import "./Navbar.css";
import displayIcon from "../../assets/icons_FEtask/Display.svg";
import downIcon from "../../assets/icons_FEtask/down.svg";
import FilterCard from '../FilterCard/FilterCard';

const Navbar = ({ onDropdownSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".filter-box, .filtercard-container")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (selectedOption) => {
    onDropdownSelect(selectedOption);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="navbar-container">
      <div className="filter-box" onClick={handleToggle}>
        <img src={displayIcon} alt="Filter Icon" className="icon filter-icon" />
        <span className="filter-text">Display</span>
        <img
          src={downIcon}
          alt="Arrow Down Icon"
          className={`icon arrow-icon ${isOpen ? "rotate" : ""}`}
        />
        {isOpen && (
          <FilterCard  onOptionSelect={handleOptionSelect} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
