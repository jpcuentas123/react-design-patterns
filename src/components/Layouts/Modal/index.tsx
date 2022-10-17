import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 500px;
  min-height: 300px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

interface ModalProps {
  title: string;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
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
        <ModalContainer onClick={handleClose}>
          <ModalContent onClick={handleModalContentClick}>
            <ModalHeader>
              <p>{title}</p>
              <button onClick={handleClose}>X</button>
            </ModalHeader>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
