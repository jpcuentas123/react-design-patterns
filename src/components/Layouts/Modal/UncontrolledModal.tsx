import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import SModal from "./Styles";

interface ModalProps {
  title: string;
}

const UncontrolledModal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
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

export default UncontrolledModal;
