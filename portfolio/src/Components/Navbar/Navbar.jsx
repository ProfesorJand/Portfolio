import React, { useEffect, useState } from "react";
import Styles from "./navbar.module.css";

export default function Navbar() {
  const [top, setTop] = useState();
  const [bottom, setBottom] = useState();
  const [view, setView] = useState(false);
  
  useEffect(()=>{    
    test()
  },[]);

  function test (){
    const element = document.getElementById("proyects");
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const rect = element.getBoundingClientRect();
    setTop(element.getBoundingClientRect().top);
    setBottom(element.getBoundingClientRect().bottom);
    if(rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
      setView(true);
    }else{
      setView(false)
    };
    // //console.log(window.scrollY)
    // if(window.scrollY >= 1500 ){
    //   setView(true)
    //  // console.log("listo")
    // }else{
    //   setView(false)
    //  // console.log("sali")
    // }
  }
  
  window.addEventListener("scroll",test)
 
  
  return (
    <div>


    <div className={view ? `${Styles.sidenav} ${Styles.highlight}`: `${Styles.sidenav}`}>
      {/* <div className={styles.sidenavFixed}> */}
        <a href="#aboutMe">About</a>
        <a href="#skills">Skills</a>
        <a href="#proyects">Proyects</a>
        <a href="#contact">Contact</a>
      {/* </div> */}
    </div>
    </div>
  );
}
