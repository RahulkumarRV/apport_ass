import "./Header.css";
import todoIcon from "../../assets/icons_FEtask/To-Do.svg";
import dotIcon from "../../assets/icons_FEtask/3 dot menu.svg";
import addIcon from "../../assets/icons_FEtask/add.svg";

const Header = ({Type, Count}) => {
  return (
    <div className="header-container">
      <div className="left-part">
        <img
          src={todoIcon}
          alt="todo"
          className="icon"
        />
        <span>{Type}</span>
        <span style={{ color: "#999999" }}>{Count}</span>
      </div>

      <div className="right-part">
        <img
          src={addIcon}
          alt="todo"
          className="icon"
        />
        <img
          src={dotIcon}
          alt="todo"
          className="icon"
        />
      </div>
    </div>
  )
}

export default Header