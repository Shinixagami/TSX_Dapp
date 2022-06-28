import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

/* Framer Motion */
import { motion } from "framer-motion";


import {

  ModalContainer,
  ModalWrapper,
  Background,
  ModalImg,
  ModalContent,
  CloseModalButton,
  ModalBtn
  
} from './ModalElements' 


/* image imports */
import camera from'./modal.jpg';

export const CModal = ({ showModal, setShowModal }) => {
  
  const modalRef = useRef();
  
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]

  );




  //-----------------------
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 24,
        stiffness: 400,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  
const Modal = ({ handleClose, text }) => {

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>{text}</p>
            <button onClick={handleClose}>Close</button>
          </motion.div>
      </Backdrop>
    );
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            
            <ModalWrapper showModal={showModal}>


                   
              <ModalContent>
                LEFT
                <h1>Test</h1>
                <p>Test.</p>

              </ModalContent>
              
              <ModalContent>

                  RIGHT
                
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <p>Get exclusive access to our next launch.</p>


                <ModalBtn>
                 Test web 3 Auth
                </ModalBtn>

                <ModalBtn>
                 MetaMask
                </ModalBtn>

                <ModalBtn>
                 Wallet Connect
                </ModalBtn>

                
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
            
          </motion.div>
          
        </Background>
      ) : null}
    </>
  );
};


// <ModalImg src={camera} alt='camera' />