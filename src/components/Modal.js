import React, { Fragment } from "react";
import { MdClose } from "react-icons/md";
import someImage from "../images/chrisSharmaWallpaper.jpeg";

import styled from "styled-components";
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 999;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const Modal = ({ showModal, setShowModal }) => {
  return (
    <Fragment>
      {showModal ? (
        // <Background>
        <ModalWrapper showModal={showModal}>
          <ModalImg src={someImage} alt="climber" />
          <ModalContent>
            <h1>Are you ready?</h1>
            <p>Get exclusive content for our next launch</p>
            <button>Join Now</button>
          </ModalContent>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
        </ModalWrapper>
      ) : // </Background>
      null}
    </Fragment>
  );
};
