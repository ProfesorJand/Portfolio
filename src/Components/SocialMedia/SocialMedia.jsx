import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube} from "react-icons/bs";
import { IconContext } from "react-icons";
import Styles from "./socialMedia.module.css";

export default function SocialMedia() {
  return (
    <>
      <div className={Styles.container}>
        <div className="containerIcons">
          <IconContext.Provider value={{ className: `${Styles["react-icons-github"]} ${Styles["react-icons"]} ` }}>
            <BsGithub />
          </IconContext.Provider>
        </div>
        <div className="containerIcons">
          <IconContext.Provider value={{ className: `${Styles["react-icons-linkedin"]}  ${Styles["react-icons"]} `}}>
            <BsLinkedin />
          </IconContext.Provider>
        </div>
        <div className="containerIcons">
          <IconContext.Provider value={{ className: `${Styles["react-icons-instagram"]} ${Styles["react-icons"]} ` }}>
            <BsInstagram />
          </IconContext.Provider>
        </div>
        <div className="containerIcons">
          <IconContext.Provider value={{ className: `${Styles["react-icons-youtube"] }  ${Styles["react-icons"]} `}}>
            <BsYoutube />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}
