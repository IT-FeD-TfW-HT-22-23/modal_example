import { MdClose } from "react-icons/md";

const Modal = ({ close, children }) => {
  return (
    <div className="overlay">
      <div className="content">
        <MdClose onClick={close} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
