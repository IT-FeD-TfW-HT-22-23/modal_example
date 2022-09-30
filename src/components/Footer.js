import "../styles/footer.css";
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Be from "../images/be.png";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="f1">
          <img src={Logo} style={{ width: "300px", marginTop: "2rem" }} />
          <div className="f-links">
            <h3>Home</h3>
            <h3>Services</h3>
            <h3>About</h3>
          </div>
        </div>
        <div className="f2">
          <span>
            <img style={{ height: "40px" }} src={One} />
            <p>My Adress</p>
          </span>
          <span>
            <img style={{ height: "30px" }} src={Two} />
            <p>GitHub</p>
          </span>
          <span>
            <img style={{ height: "30px" }} src={Three} />
            <p>helena@klarr.se</p>
          </span>
        </div>
        <div className="f3">
          <p>Wanna see more?</p>
          <div className="f-icons">
            <img src={Instagram} style={{ width: "40px" }} />
            <img src={Facebook} style={{ width: "30px" }} />
            <img src={Be} style={{ width: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
