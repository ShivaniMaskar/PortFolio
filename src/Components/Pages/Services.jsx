import React from 'react'
import styled from 'styled-components'
import animation from '../../styled/animation';
import { services } from '../../data/data'
const Services = () => {
  animation();
  return (
    <ServiceCards>
        <h1>Services</h1>
        <div className="service-card">
            {services.map((data) => (
                <div className="ser-01" data-aos="flip-right">
                  <div className="icon-container">
                  {React.createElement(data.icon, { style: { fontSize: '130px',     color: '#e0a80d4f',
    position: 'absolute',
    right: '-35px',
    top: '-35px',  } })}
                  </div>
                  {React.createElement(data.icon, { style: { fontSize: '40px', color: '#FFFFFF',  } })}
                  <h3>{data.name}</h3>
                  <p>{data.text}</p>
                </div>         
))}
        </div> 
    </ServiceCards>
  )
} 
export default Services
const ServiceCards = styled.div`
padding-bottom:100px;
.service-card {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    max-width: 1200px;
    margin: 0 auto;
    gap:40px;
    margin-top:20px;
}
    h1{
    text-align:center;
    color:#E0A80D;
    }
    h3{
      color:#E0A80D;
      font-weight:300;
    }
    p{
    color:#FFFFFF;
    line-height: 2;
  }
   .ser-01 {
    width: 30%;
    height: 40vh;
    display: flex;
    background-color: #212222;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding:0 15px;
    overflow:hidden;
   }
   @media only screen and (max-width: 768px){
    padding-top:500px;
    padding-bottom:100px;
   
   .service-card{
    flex-direction:column;
    align-items:center;
   }
   .ser-01{
    width:80%;
    height:65vh;
   }
  }
`