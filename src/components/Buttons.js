import "../styles/buttons.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <button
        style={{
          fontWeight: "600",
          letterSpacing: "1px",
          fontSize: "1.7rem",
        }}
        className="btn"
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
