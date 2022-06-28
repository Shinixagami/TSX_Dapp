

/* librart for css styled componenets */
import styled from 'styled-components'

//image imports
import Green from  '../../images/Alphabots/Green.png'
import Blue from  '../../images/Alphabots/Blue.png'



export const MediaPlayerContainer = styled.div`

  text-align: center;
  align-items: center; 
  padding-bottom: 5%;
  padding-top: 7%;

  /*No need for z index unless theres layed items*/
  /*z-index: 3;*/

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative; 

`


export const MediaPlayerWrapper = styled.div`

  box-shadow: 4px 4px 5px rgb(1, 1, 1);

  z-index: 3;

  padding-top: 6%;
  padding-bottom: 6%;
  text-align: center;

  background-color: black;

   text-align: center;
  align-items: center; 
  padding-bottom: 2%;

/*No need for z index unless theres layed items*/
/*z-index: 3;*/
  display: flex;
  flex-direction: column;
  align-items: center;


/*  Important for box width */
  max-width: 87%;  

/* From https://css.glass */
  background: rgba(6, 5, 13, 0.28);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(6, 5, 13, 0.44);

  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 6px, rgb(51, 51, 51) 0px 0px 0px 3px;

`
export const Heading_Text1 = styled.div`
  
  font-weight: bold;
  
  font-family: 'VT323', monospace;

/*    font-family: 'Mochiy Pop P One', sans-serif; */

  font-size: 140%;
  color: #04D4F0;
  text-shadow: 2px 2px 2px DimGray;
  
`


export const Heading_Text2 = styled.div`
  
  font-family: 'VT323', monospace;

/*    font-family: 'Mochiy Pop P One', sans-serif; */
  font-size: 125%;

  font-weight: bold;


   color: #04D4F0;

  text-shadow: 2px 2px 2px DimGray;
  

  
/*   background: -webkit-linear-gradient(315deg,#380036 0%, #0cbaba 74%);
  background-size: 200% 200%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

`


export const Spaced_Text = styled.div`

  font-size: 20px;
  font-family: 'VT323', monospace;
  text-align: center;
  padding-right: 35px;
  padding-left: 35px;
  padding-bottom: 2%;

`


export const Video_Styled = styled.div`

  border-radius: 10%;
  padding-bottom: 3%;

/*   border: 15px solid green; */

  
`



