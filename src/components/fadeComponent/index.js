import React, { useEffect } from 'react';

export default function Fade() {
    useEffect(() => {
      const target = document.querySelectorAll('.fade');
      const animationClass = 'animate';
      const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  
      target.forEach(function (e) {
        if (windowTop > e.offsetTop) {
          e.classList.add(animationClass);
        }
      });
  
      window.addEventListener('scroll', animeScroll);
  
      function animeScroll() {
        target.forEach(function (e) {
          if (windowTop > e.offsetTop) {
            e.classList.add(animationClass);
          }
        });
      }
  
      return () => {
        window.removeEventListener('scroll', animeScroll);
      };
    }, []);
  
    return <div />;
  }