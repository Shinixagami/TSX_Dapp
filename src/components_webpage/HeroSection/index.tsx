//react library
import React, {useState} from 'react'


// import Tech_Globe from '../../video/cyber.mp4'


/*
<HeroBg>
 <VideoBg autoPlay loop muted playsinline src={Tech_Globe} type = 'Tech_Globe/mp4' />
*/

import {Button1} from './ButtonElements'

//componenet
import {
  
  HeroContainer,
  HeroBg,
  VideoBg,
  GifBg,

  HeroContent,
  HeroH1,
  HeroP, 
  
  HeroBtnWrapper, 
  ArrowForward,
  ArrowRight

} from './HeroSectionElements' 


export default function HeroSection() {

  /* on hover for arrow icon */
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return(

    <div>

    <HeroContainer> 
      
      <HeroBg>
        <GifBg/>
      </HeroBg>

      <HeroContent>
        <HeroH1>
          Decentralized Platform Done Right.
        </HeroH1>

        <HeroP>
          Testing Purposes Only. 
        </HeroP>
        
      <HeroBtnWrapper>
        <Button1 to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
          Get started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button1>
      </HeroBtnWrapper>
        
      </HeroContent>
      
    </HeroContainer> 
      
    </div>

  )

};