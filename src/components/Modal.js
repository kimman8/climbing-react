import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
//CLIMBING

export const Background = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;
export const ModalWrapper = styled.div`
  width: 900px;
  height: 900px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  display: grid;
  grid-template-rows: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

// export const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;
export const ModalImg = styled.img`
  max-width: 1000px;
  max-height: 1000px;
  border-radius: 10px;
  background: #000;
  // z-index: 30;
`;
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  color: #dc143c;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  :hover& {
    color: #ff6347;
  }
`;
export const Modal = ({ showModal, setShowModal, currentImg, currentText }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <React.Fragment>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            {/* <ModalWrapper> */}
            <ModalImg src={currentImg} alt="climber" />
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
            {/* </ModalWrapper> */}
          </animated.div>
        </Background>
      ) : null}
    </React.Fragment>
  );
};
