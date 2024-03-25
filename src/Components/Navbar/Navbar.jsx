import React, { useEffect, useState } from 'react';
import Styles from './navbar.module.css';

export default function Navbar({ lenguage }) {
  const [scrollTop, setScrollTop] = useState(0);

  const About = {
    es: 'Acerca de mí',
    en: 'About',
  };
  const Skills = {
    es: 'Habilidades',
    en: 'Skills',
  };
  const Proyects = {
    es: 'Proyectos',
    en: 'Proyects',
  };
  const Organizations = {
    es: 'Organizaciones',
    en: 'Organizations',
  };
  const Contact = {
    es: 'Contáctame',
    en: 'Contact me',
  };

  // function openMenu() {
  //   var x = document.getElementById('myLinks');
  //   if (x.style.display === 'block') {
  //     x.style.display = 'none';
  //   } else {
  //     x.style.display = 'block';
  //   }
  // }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', highlightScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', highlightScroll);
    };
  }, [scrollTop]);

  function highlightScroll() {
    setScrollTop(window.scrollY);
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll(`div .${Styles.topnav} a`);
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      //const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 30) {
        current = section.getAttribute('id');
      }
    });
    navLi.forEach((a) => {
      a.classList.remove(Styles.active);
      if (a.classList.contains(current)) {
        a.classList.add(Styles.active);
      }
    });
  }

  return (
    <div className={Styles.mobileContainer}>
      <div className={Styles.topnav}>
        <a className={`${Styles.active} aboutMe `} href="#aboutMe">
          {About[lenguage]}
        </a>
        <a className="skills" href="#skills">
          {Skills[lenguage]}
        </a>
        <a className="proyects" href="#proyects">
          {Proyects[lenguage]}
        </a>
        <a className="organizations" href="#organizations">
          {Organizations[lenguage]}
        </a>
        <a className="contact" href="#contact">
          {Contact[lenguage]}
        </a>
      </div>
    </div>
  );
}
