



// import HeroSection from '../components_webpage/HeroSection/';


// import InfoSection from '../components_webpage/InfoSection/';




import HeroSection from '../../components_webpage/HeroSection/';
// <HeroSection/>

import InfoSection from '../../components_webpage/InfoSection/';
// <InfoSection/>


import MediaPlayer from '../../components_webpage/MediaPlayer/';
// <MediaPlayer/>


import Navbar from '../../components_webpage/Navbar/';
// <Navbar/>

import ToDoList from '../../components_webpage/ToDoList/';
// <ToDoList/>

//import HomePage from './main_pages/home';

import { HomeBG, Home_Footer } from './HomeElements'


export default function HomePage() {
  return (

    <HomeBG>

      <HeroSection/>  

      <InfoSection/>

      <MediaPlayer/>
      
      <div className="app">This is the homepage</div>

      <Home_Footer>
      All Rights Reserved. Under Development.
      </Home_Footer> 
    
    </HomeBG>
    
  )
}


