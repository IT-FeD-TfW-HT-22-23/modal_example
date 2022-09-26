// Okontrollerad input med refs
// data hanteras av DOM
import { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // kort sagt stoppa browsern från default beteende
    alert("Namn: " + inputRef.current.value);
  };

  return (
    <form
      style={{ marginLeft: "20rem", position: "relative", bottom: "20rem" }}
      onSubmit={submitHandler}
    >
      <label htmlFor="name">Namn:</label>
      <input type="text" name="name" ref={inputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Uncontrolled;
