import './Card.css';
import cardIcon from "../../assets/icons_FEtask/linkedin.png"

const Card = ({ id, iconSrc, title, dots, footerIcon, footerText }) => {
  return (
    <div className="card">
      {/* First Row */}
      <div className="card-row first-row">
        <span className="card-id">{id}</span>
        <img
          src={cardIcon}
          alt="User"
          className="card-image"
        />
      </div>

      {/* Second Row */}
      <div className="card-row second-row">
        <p className="card-title">
          {title}
        </p>
      </div>

      {/* Third Row */}
      <div className="third-row">
        <span className="card-dots">{dots}</span>
        <span className='card-icon'>{footerIcon}</span>
        <span className="card-footer-text">{footerText}</span>
      </div>
    </div>
  );
};

export default Card;

