import React from "react";
import SurveySendModal from "../survey/SurveySendModal";
import "./Modal.css";

const Modal = ({ modalClose, post, component }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  return (
    <div className="common-Modal-container" onClick={onCloseModal}>
      <div className="common-Modal-modal">
        {component === "SurveySendModal" ? (
          <SurveySendModal
            post={post}
            onCloseModal={onCloseModal}
            modalClose={modalClose}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Modal;
