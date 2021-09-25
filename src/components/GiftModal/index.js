import React from "react";
import Modal from "../Modal";
import {
  GiftModalContainer,
  GiftTitle,
  GiftPrice,
  GiftButtonsContainer,
} from "./GiftModal.styles";
import { formatterCurrency } from "../../utils/index";
import { currencies, locales } from "../../constants/index";
import Button from "../Button";
import Gift from "../Gift";

function GiftModal({ isOpen, onClose, gift }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <GiftModalContainer>
        <GiftTitle>
          {gift.name}{" "}
          <GiftPrice>
            {formatterCurrency(
              locales["US"],
              currencies["USD"],
              gift.sellPrice
            )}
          </GiftPrice>
        </GiftTitle>
        <Gift {...gift} />
        <GiftButtonsContainer>
          <Button>Try Again</Button>
          <Button secondary>
            Sell for{" "}
            {formatterCurrency(
              locales["US"],
              currencies["USD"],
              gift.sellPrice
            )}
          </Button>
        </GiftButtonsContainer>
      </GiftModalContainer>
    </Modal>
  );
}

export default GiftModal;
