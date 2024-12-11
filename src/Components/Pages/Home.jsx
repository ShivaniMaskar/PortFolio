import React, { useEffect } from 'react'
import { home } from '../../data/data'
import Typewriter from "typewriter-effect";
import { Button } from '../../styled/home';
import animation from '../../styled/animation';
import styled from 'styled-components';
import About from './About';
const Home = () => {
  animation();
  return (
<Container>
<div className='bg-01'>
      {home.map((data) =>(
     <>
        <h3>{data.text}</h3>
        <h1>
      <Typewriter
      options={{
        loop: true, // Enables continuous execution
      }}
          onInit={(typewriter) => {
            typewriter
              .typeString(data.name)
              .pauseFor(1500)
              .deleteAll()
              .typeString(data.post)
              .pauseFor(1500)
              .deleteAll()
              .typeString(data.design)
              .pauseFor(1500)
              .deleteAll()
              .start()
          } } /> </h1>
          <p>{data.desc} </p>
          <Button data-aos="fade-left ">
            Download CV
          </Button>
          </>       
    ))
      }
 </div>

</Container>
  )

}
export default Home
const Container = styled.div`
  background-image:url("./images/bg-01.png");
  background-size:cover;
  background-position:center;
  height:90vh;
  display:flex;
 align-items:center;
  justify-content:center;
  
  .bg-01{
   text-align:center;
    max-width:50%;
    margin:0 auto;
  }
h1{
  font-size: 60px;
  color:#E0A80D;
  line-height:2
}
 p{
  color:#FFFFFF;
  font-weight:300;
  line-height:2;
  }
  h3{
    color:#FFFFFF;
    font-weight:400;
    line-height:2
  }
  @media only screen and (max-width: 768px) {
    .bg-01{
        max-width:70%;
    }
    h1{
        font-size:30px !important;
    }
    height:120vh;
}  
`