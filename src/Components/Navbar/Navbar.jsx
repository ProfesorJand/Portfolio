import React, { useEffect, useState } from 'react';
import Styles from './navbar.module.css';

export default function Navbar({ lenguage }) {
  // const [top, setTop] = useState();
  // const [bottom, setBottom] = useState();
  // const [view, setView] = useState(false);
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

  function openMenu() {
    var x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  // useEffect(() => {
  //   test();
  // }, []);

  // function test() {
  //   const element = document.getElementById('proyects');
  //   const viewportHeight =
  //     window.innerHeight || document.documentElement.clientHeight;
  //   const rect = element.getBoundingClientRect();
  //   setTop(element.getBoundingClientRect().top);
  //   setBottom(element.getBoundingClientRect().bottom);
  //   if (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   ) {
  //     setView(true);
  //   } else {
  //     setView(false);
  //   }
  //   // //console.log(window.scrollY)
  //   // if(window.scrollY >= 1500 ){
  //   //   setView(true)
  //   //  // console.log("listo")
  //   // }else{
  //   //   setView(false)
  //   //  // console.log("sali")
  //   // }
  // }

  //window.addEventListener('scroll', test);

  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll(`div .${Styles.topnav} a`);

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 20) {
        current = section.getAttribute('id');
      }
    });
    navLi.forEach((a) => {
      a.classList.remove(Styles.active);
      if (a.classList.contains(current)) {
        a.classList.add(Styles.active);
      }
    });
  });
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
