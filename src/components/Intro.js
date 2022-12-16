import Buttons from "./Buttons";
import Modal from "./Modal";
import "../styles/intro.css";
import Typography from "./Typography";
import Test from "./Test";
import { useState } from "react";

const Intro = () => {
  const [status, setStatus] = useState(false);
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
      <Modal close={() => setStatus(false)}>
        <p>hejhej</p>
      </Modal>
      <button onClick={() => setStatus(true)}>Open</button>
      <Buttons />
    </>
  );
};

export default Intro;
