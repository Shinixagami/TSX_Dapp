
//media player css
import './MediaPlayer.css';  

import {
  MediaPlayerContainer,
  MediaPlayerWrapper,
  Spaced_Text,
  Video_Styled,
  Heading_Text1,
  Heading_Text2
} from './MediaPlayerElements' 

export default function MediaPlayer() {

  return(

   <MediaPlayerContainer>
    <MediaPlayerWrapper>
  
        <Spaced_Text>
          <Heading_Text1>What are NFTs?</Heading_Text1>
        </Spaced_Text>
       
      <Video_Styled>
          <video controls width="55%" height="55%"  >
  
          <source src="src/resources/videos/NFT_Vid.mp4"
              type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
          </video>
      </Video_Styled>
  
  
        <Heading_Text2>
           +Decentralized
        </Heading_Text2>
         <Heading_Text2>
           +Anonymous
        </Heading_Text2>
         <Heading_Text2>
           +Secure
        </Heading_Text2>
       
      </MediaPlayerWrapper>
    </MediaPlayerContainer>
     
  )

};


