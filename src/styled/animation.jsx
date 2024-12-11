import React from 'react'
import AOS from "aos";  
import { useEffect } from 'react';
import "aos/dist/aos.css";
export const animation = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          offset: 120,    // Trigger offset in px
          easing: 'ease-in-out',
          once: false,   // Whether animation should happen only once
        });
        AOS.refresh();
      }, []);
 
}

export default animation
