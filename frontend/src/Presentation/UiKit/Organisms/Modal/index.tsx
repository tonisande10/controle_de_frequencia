import React, { useContext } from "react";
import { Modal as ModalBody } from "@material-ui/core";
import { ModalContext } from "Application/Global/Modal/Modal.Context";
import { Container } from "./style";

function Modal({ children, ...rest }: any) {
  const { openModal, setOpenModal } = useContext(ModalContext);

  return (
    <ModalBody
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={openModal}
      onClose={() => setOpenModal(!openModal)}
    >
      <Container>{children}</Container>
    </ModalBody>
  );
}

export default Modal;
