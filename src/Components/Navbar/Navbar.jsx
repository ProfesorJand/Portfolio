import React, { useEffect, useState } from 'react';
import Styles from './navbar.module.css';

export default function Navbar({ lenguage }) {
  const [top, setTop] = useState();
  const [bottom, setBottom] = useState();
  const [view, setView] = useState(false);
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
  const Contact = {
    es: 'Contactos',
    en: 'Contact',
  };

  useEffect(() => {
    test();
  }, []);

  function test() {
    const element = document.getElementById('proyects');
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const rect = element.getBoundingClientRect();
    setTop(element.getBoundingClientRect().top);
    setBottom(element.getBoundingClientRect().bottom);
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      setView(true);
    } else {
      setView(false);
    }
    // //console.log(window.scrollY)
    // if(window.scrollY >= 1500 ){
    //   setView(true)
    //  // console.log("listo")
    // }else{
    //   setView(false)
    //  // console.log("sali")
    // }
  }

  window.addEventListener('scroll', test);

  return (
    <div>
      <div
        className={
          view ? `${Styles.sidenav} ${Styles.highlight}` : `${Styles.sidenav}`
        }
      >
        {/* <div className={styles.sidenavFixed}> */}
        <a href="#aboutMe">{About[lenguage]}</a>
        <a href="#skills">{Skills[lenguage]}</a>
        <a href="#proyects">{Proyects[lenguage]}</a>
        <a href="#contact">{Contact[lenguage]}</a>
        {/* </div> */}
      </div>
    </div>
  );
}
