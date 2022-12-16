import Buttons from "./Buttons";
import "../styles/intro.css";
import Typography from "./Typography";
import Test from "./Test";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="cta">
          <h1>Building apps the smart way. Learned how the hard way.</h1>
          <p>
            I'm a freelance software developer. I work with cutting-edge
            software tools and frameworks to build apps that are fast,
            maintainable and scale like crazy.
          </p>
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default Intro;
