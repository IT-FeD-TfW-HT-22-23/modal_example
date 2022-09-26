import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "../styles/contact.css";

const Contact = ({ children }) => {
  const toTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div id="contact" className="contact">
      {children}
    </div>
  );
};

export default Contact;

/*   <BsFillArrowUpCircleFill
        onClick={toTop}
        style={{
          marginLeft: "80rem",
          marginTop: "30rem",
          fontSize: "30px",
          cursor: "pointer",
        }}
      />
       */
