import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar';
// import Test from './SectionTwo';
import Heading from '../../Heading';
import Unveiling from '../Unveiling/Unveiling';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
// import SectionThree from './SectionThree';

const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Heading/>
      <Unveiling/>
      <FAQ/>
      {/* <Test/> */}
      {/* <SectionThree/> */}
      <Footer/> 
    </div>
  )
}

export default Home;