import Modal from "./Modal";
import { useState } from "react";

const Buttons = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="buttons">
      {status && (
        <Modal close={() => setStatus(false)}>
          <div className="modal-div">hejhej</div>
        </Modal>
      )}
      <button
        style={{
          fontWeight: "600",
          letterSpacing: "1px",
          fontSize: "1.7rem",
        }}
        className="btn"
        onClick={() => setStatus(true)}
      >
        Services
      </button>
      <button
        style={{
          fontWeight: "600",
          letterSpacing: "1px",
          fontSize: "1.7rem",
        }}
        className="btn"
      >
        About
      </button>
      <button
        style={{
          fontWeight: "600",
          letterSpacing: "1px",
          fontSize: "1.7rem",
        }}
        className="btn"
      >
        Contact
      </button>
    </div>
  );
};

export default Buttons;
