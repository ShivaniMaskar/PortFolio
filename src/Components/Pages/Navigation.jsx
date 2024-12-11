import React from 'react'
import styled from "styled-components"
import Home from './Home'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    
    <Container>
  <Navbar>
    <div>
        <img src="/images/logo.png" alt="" />
    </div>
    <ul>
    <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
    </ul>
  </Navbar>
  </Container>
  )
}
export default Navigation
const Container= styled.section`
   background-color: #2d2e2e;
   padding:10px 0;
   position: fixed;
   width:100%;
`
const Navbar = styled.section`
    display: flex;
    justify-content: space-between;
    align-items:center;
    max-width:1200px;
    margin: 0 auto;

    ul {
    display: flex;
    list-style: none;
    gap: 25px;
    color:#7d8792
}
`
