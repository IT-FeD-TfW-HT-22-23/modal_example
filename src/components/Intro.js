import Buttons from "./Buttons";
import "../styles/intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro-img">
        <h1 style={{ marginLeft: "5rem" }}>Hero Image</h1>
      </div>
      <div className="cta">
        <h2>Lorem ipsum dolor sit amet, consectetur elit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Buttons />
      </div>
    </>
  );
};

export default Intro;
