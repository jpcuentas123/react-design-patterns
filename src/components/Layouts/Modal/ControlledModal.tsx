import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import SModal from "./Styles";

interface ModalProps {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
}

const ControlledModal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  title,
  isOpen,
  handleClose,
}) => {
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <SModal.ModalContainer onClick={handleClose}>
          <SModal.ModalContent onClick={handleModalContentClick}>
            <SModal.ModalHeader>
              <p>{title}</p>
              <button onClick={handleClose}>X</button>
            </SModal.ModalHeader>
            {children}
          </SModal.ModalContent>
        </SModal.ModalContainer>
      )}
    </>
  );
};

export default ControlledModal;
