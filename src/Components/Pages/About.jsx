import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../../styled/home'
import { OutlineButton } from '../../styled/home'
import { about } from '../../data/data'
import animation from '../../styled/animation'
const About = () => {
  animation();
  return (
    <AboutMe>
       {about.map((data) =>(
        <div className='abt'>
            <div className="abt-01" data-aos="fade-up-right"> 
                <img src={data.cover} alt="" />
            </div>
            <div className="abt-content">
                <h2>About Me</h2>
                <p>{data.desc}</p>
                <p>{data.desc1}</p>
<div className="abt-btn" data-aos="fade-up-left">
                <OutlineButton>Download CV</OutlineButton>
                <Button>Download CV</Button>
            </div>
            </div>  
        </div>
          ))}
    </AboutMe>
  )
}
export default About
const AboutMe = styled.div`
    .abt{
        display:flex;
        flex-direction:row;
        align-items:center;
        max-width:80%;
        margin:0 auto;
        height:100vh;
    }
    h2{
      font-size:30px;
      color: #e0a80d
    }
    p{
      color:#ffffff;
      line-height:2
    }
    .abt-btn {
    display: flex;
    gap: 20px;
}


  @media only screen and (max-width: 768px) {
   .abt{
    flex-direction:column;
   }
   .abt-content{
    width:320px;
   }
   p{
    line-height:1.7;
   }
}  
`