  /*usesState for action triggers*/
import React, { useEffect, useState } from 'react'

import {FaBars} from 'react-icons/fa'

import { AiOutlineClose } from "react-icons/ai";

import styled from 'styled-components';

/*no need to import keyframes */

//remember to import to stop the page from being white
import {
  
  Nav,
  NavbarContainer,  
  NavLogo,
  NavLogoText,
  MobileIcon,
  NavMenu,
  
  NavLinksScroll_Container,
  NavItemScroll_Text,
  NavBtnLinkScrollTo,
  NavBtnConnectWallet,
  NavBtnDisconnect,
  
  NavBtn,
  NavBtnLinkRouter,
  NavImage,

  SendToPage_Container,
  SendToPage_Link
 } from './NavbarElements' 


/* SIDEBAR IS INPUTTED HERE */
import {

  SidebarContainer,
  IconSidebar,
  CloseIcon,

  SidebarWrapper,
  SidebarMenu,

  SendToPage_LinkR,
  SidebarLink,

  SideBtnWrap,
  SidebarRouter,

  SidebarImage

} from './SidebarElements' 




/* Modal */

/* custom modal*/
import { CModal } from './modal';

//Nav Yellow
import './HighLightElements.css'

/* Connect Wallet */
import './ConnectWalletModal.css'

/*toast notifs */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* new hamburger menu*/
import { Squash as Hamburger } from 'hamburger-react'

/* API Calls */
import {useMoralis} from "react-moralis"

import {WalletModal, ConnectButton, Icon} from "web3uikit"



export default function Navbar() {

  /* Scrolling to */
  const [scrollNav, setScrollNav] = useState(false);

  /*for navbar hamburger menu*/
  const [isOpen, setIsOpen] = useState(false);

  /* API ------------------------ */
  const {authenticate, isAuthenticated, Moralis, account} = useMoralis();

  /* Connect Wallet -Metamask  -----------  */
  const pushMetaMask = async () => {

      if (!isAuthenticated) {
        await authenticate({ 
          provider: "walletconnect",
          signingMessage:"MetaMask Sign In"
          })
          
          .then(function (user) {
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }

  }

  /* Connect Wallet -Wallet Connect -----------*/
  const pushWalletConnect = async () => {
    
      if (!isAuthenticated) {
        await authenticate({ 
          provider: "walletconnect",
          signingMessage:"MetaMask Sign In"
          })
          
          .then(function (user) {
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }

  }

  /* Login Using Google */
  const pushEmailAuth = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      toast("Disconnecting...");
      setTimeout(function(){
        // Code to run after the pause
        Moralis.User.logOut().then(()=> {
        window.location.reload(); 
        });
      }, 3100);
      
    };
    return;
  };

  //----------------------------------------- Modal Settings 

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      display: 'block',
      position: 'fixed',
      zIndex: '1000',
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle;
  const [modalIsOpen, setmodalIsOpen] = React.useState(false);



 


 //------------------------------------- END OF MODAL
  
  /* hides nav on scroll*/
  
  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);



  
  /*for navbar to side bar toggle */
  const toggle = () => {
    setIsOpen(!isOpen)
    //if false sidebar will show
    console.log("Toggled Status isOpen: ", isOpen);
    
  };

  const closeConnectModal = () => {
    //if false sidebar will show
    console.log("Closing Modal");
    document.getElementById("walletConnectModalContainer").style.display = "none";
  };

  const WalletPopUp = () => {
    //if false sidebar will show
    console.log("Opening Wallet ");
    setTimeout(() => {
      document.getElementById("walletConnectModalContainer").style.display = "block";
    }, 150)
    
  };


  const Testing = () => {
    //if false sidebar will show
    console.log("Is user logged in? (IsAuthenticated): ", isAuthenticated);
   
  };

  
  const disconnectWallet = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      toast("Disconnecting...");
      setTimeout(function(){
        // Code to run after the pause
        Moralis.User.logOut().then(()=> {
        window.location.reload(); 
        });
      }, 3100);
      
    };
    return;
  };


  /* Web3uI Kit modal */
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);

    console.log("Modal is Opened ");

  };

  
  return(
    <>
      
      <div id="walletConnectModalContainer">
       <WalletModal 
        moralisAuth
        id="walletConnectModalBtn"
        signingMessage="Thanks for testing it :P"
        setIsOpened={closeConnectModal}
        />
      </div>


      <div id="walletConnectModalBtn">

        <CModal showModal={showModal} setShowModal={setShowModal} />
           
      </div>
    

      
      <Nav>
        <NavbarContainer>
  
          <NavLogo to = '/'> 
            <NavLogoText>HORIZON</NavLogoText>
          </NavLogo>
  
          <MobileIcon onClick={toggle}> 
            <Hamburger size={26}  
              toggled={isOpen} toggle={setIsOpen}
            />
          </MobileIcon>

        <NavMenu> 

          <NavLinksScroll_Container
            to='AboutSection'
            smooth={true}
            duration={600}
            spy={true}
            exact='true'
            offset={-80}
          >
            <NavItemScroll_Text>
              About
            </NavItemScroll_Text>
          </NavLinksScroll_Container>

          
           <NavLinksScroll_Container
            to='TraitsSection'
            smooth={true}
            duration={600}
            spy={true}
            exact='true'
            offset={-80}
          >
            <NavItemScroll_Text>
              Traits
            </NavItemScroll_Text>
          </NavLinksScroll_Container>



          <NavLinksScroll_Container
            to='FaqSection'
            smooth={true}
            duration={600}
            spy={true}
            exact='true'
            offset={-80}
          >
            <NavItemScroll_Text>
              FAQ
            </NavItemScroll_Text>
          </NavLinksScroll_Container>

          <SendToPage_Container>
            <SendToPage_Link to = '/roadmap'> Roadmap </SendToPage_Link>
          </SendToPage_Container>

          <NavLinksScroll_Container
            to='MintSection'
            smooth={true}
            duration={600}
            spy={true}
            exact='true'
            offset={-80}
          >
            <NavItemScroll_Text>
              Mint
            </NavItemScroll_Text>
          </NavLinksScroll_Container>

  
        </NavMenu>
          

            {isAuthenticated ? (

              <NavBtn>

                <NavBtnLinkScrollTo to='MintSection'
                smooth={true}
                duration={600}
                spy={true}
                exact='true'
                offset={-80}
                > Mint </NavBtnLinkScrollTo>
              
              <NavBtnDisconnect onClick={disconnectWallet}>
                <AiOutlineClose/>
              </NavBtnDisconnect>

                 
            </NavBtn>

            ) : (

              <>

                <NavBtn>
                <NavBtnConnectWallet onClick={WalletPopUp}>
                Connect Wallet
                </NavBtnConnectWallet>
                </NavBtn>

                <NavBtn>
                <NavBtnConnectWallet onClick={openModal}>
                Modal Pop Test
                </NavBtnConnectWallet>
                </NavBtn>
                
                 
              </>
            
      
      
            )}
         
        
  
        </NavbarContainer>
        
      </Nav>

      
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
        
        <SidebarWrapper>
  
          <SidebarMenu>
  
            <SendToPage_LinkR to = '/' >
            Home
            </SendToPage_LinkR>
  
            <SendToPage_LinkR to = '/waveportal' >
            .Me
            </SendToPage_LinkR>
  
            <SendToPage_LinkR to = '/dao/settings' >
            DAO
            </SendToPage_LinkR>
            
          </SidebarMenu>
          
        </SidebarWrapper>
  
        <SidebarImage/>
  
        <SideBtnWrap>
          <SidebarRouter to="/mint"> Mint </SidebarRouter> 
        </SideBtnWrap>

      </SidebarContainer>
  
    </>
    
  )

};



// <NavBtnLinkScrollTo to='MintSection'
//   smooth={true}
//   duration={600}
//   spy={true}
//   exact='true'
//   offset={-80}
// > Mint </NavBtnLinkScrollTo>







/* ROUTER LINK */

// <SidebarRouter to="/mint"> Mint </SidebarRouter> 





  // <ConnectButton 
  //         signingMessage="Welcome! Please sign to authenticate."   
  //            />


/* SCROLL TO  */

// <NavBtnLinkScrollTo to='MintSection'
//   smooth={true}
//   duration={600}
//   spy={true}
//   exact='true'
//   offset={-80}
// > Mint </NavBtnLinkScrollTo>

/* old code */

          // <SendToPage_Container>
          //   <SendToPage_Link to = '/about'> About </SendToPage_Link>
          // </SendToPage_Container>
  
          // <SendToPage_Container>
          //   <SendToPage_Link to = '/roadmap'> Roadmap </SendToPage_Link>
          // </SendToPage_Container>
    
          // <SendToPage_Container>
          //   <SendToPage_Link to = '/dao/home'> DAO </SendToPage_Link>
          // </SendToPage_Container>
  
          // <SendToPage_Container>
          //   <SendToPage_Link to = '/waveportal'> Wave Portal </SendToPage_Link>
          // </SendToPage_Container>
  
          // <SendToPage_Container>
          //   <SendToPage_Link to = '/'  alt="this will drop down below the page"> FAQ </SendToPage_Link>
          // </SendToPage_Container>
