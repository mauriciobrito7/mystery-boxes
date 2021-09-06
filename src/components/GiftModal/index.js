import React from "react";
import Modal from "../Modal";
import { GiftModalContainer } from "./GiftModal.styles";
import Gift from "../Gift";

function GiftModal({ isOpen, onClose, gift }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <GiftModalContainer>
        <Gift {...gift} />
      </GiftModalContainer>
    </Modal>
  );
}

export default GiftModal;
