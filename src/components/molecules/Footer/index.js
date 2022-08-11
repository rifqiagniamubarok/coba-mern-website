import React from "react";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src="" alt="logo" />
        </div>
        <div className="social-wrapper">
          <img src="" alt="facebook" />
          <img src="" alt="instagram" />
          <img src="" alt="twitter" />
          <img src="" alt="discord" />
          <img src="" alt="github" />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
