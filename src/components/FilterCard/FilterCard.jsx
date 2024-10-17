import "./FilterCard.css";
import downIcon from "../../assets/icons_FEtask/down.svg";

const FilterCard = () => {
  return (
    <>
      <div className="filtercard-container">
        <div className="filter-left-part">
          <p>Grouping</p>
          <div className="filter-box">
            <span className="filter-text">Status</span>
            <img src={downIcon} alt="Arrow Down Icon" className="icon arrow-icon" />
          </div>
        </div>

        <div className="filter-right-part">
          <p>Ordering</p>
          <div className="filter-box">
            <span className="filter-text">Priority</span>
            <img src={downIcon} alt="Arrow Down Icon" className="icon arrow-icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterCard;