// import { useState } from "react";
import "./modal.css";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <button className="modal-btn" onClick={closeModal}>
              <MdClose size={25} />
            </button>
            <h2 className="font-bold text-xl mb-2">Alert</h2>
            <hr className="border-[1px] border-b-gray-400 mb-2" />
            <p className="text-sm">{children}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
