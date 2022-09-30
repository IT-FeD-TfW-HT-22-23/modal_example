import Buttons from "./Buttons";
import "../styles/intro.css";
import Typography from "./Typography";
import Test from "./Test";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="cta">
          <Typography className="typo" />
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
