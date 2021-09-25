import ReactDOM from "react-dom";
import { ModalContainer, CloseIcon } from "./Modal.styles";

function Modal({ isOpen = false, onClose, children }) {
  if (!isOpen) {
    return;
  }

  return (
    <div>
      {ReactDOM.createPortal(
        <ModalContainer>
          <CloseIcon onClick={onClose} />
          {children}
        </ModalContainer>,
        document.getElementById("modal")
      )}
    </div>
  );
}

export default Modal;
