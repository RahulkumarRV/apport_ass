import React, { useState } from 'react';
import './FilterCard.css';
import downIcon from '../../assets/icons_FEtask/down.svg';

const FilterCard = ({ onOptionSelect }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null); // To toggle specific submenus

  // Handles toggling a specific submenu
  const handleSubMenuToggle = (menuId) => {
    setOpenSubMenu(openSubMenu === menuId ? null : menuId); // Open the selected submenu
  };

  // Handles selecting a final option
  const handleOptionSelect = (option) => {
    onOptionSelect(option); // Call the function passed via props
  };

  return (
    <>
      <div className="filtercard-container">
        <div className="filter-left-part">
          <p>Grouping</p>
          <div className="filter-box" onClick={() => handleSubMenuToggle(1)}>
            <span className="filter-text">Status</span>
            <img src={downIcon} alt="Arrow Down Icon" className="icon arrow-icon" />
          </div>
          {openSubMenu === 1 && (
            <div className="submenu">
              <div className="submenu-option" onClick={() => handleOptionSelect('status')}>
                Status
              </div>
              <div className="submenu-option" onClick={() => handleOptionSelect('user')}>
                User
              </div>
            </div>
          )}
        </div>

        <div className="filter-right-part">
          <p>Ordering</p>
          <div className="filter-box" onClick={() => handleSubMenuToggle(2)}>
            <span className="filter-text">Priority</span>
            <img src={downIcon} alt="Arrow Down Icon" className="icon arrow-icon" />
          </div>
          {openSubMenu === 2 && (
            <div className="submenu">
              <div className="submenu-option" onClick={() => handleOptionSelect('priority')}>
                Priority
              </div>
              <div className="submenu-option" onClick={() => handleOptionSelect('title')}>
                Title
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterCard;
