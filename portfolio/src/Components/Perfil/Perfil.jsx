import React from "react";
import Style from "./perfil.module.css";
import ImgJorge from "../../Images/Foto_cuadrada_Jorge.jpg";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";
import Skills from "../Skills/Skills.jsx";

export default function Perfil() {
  const name = "Jorge";
  const lastName = "Andrade";
  const pdfEspanol = "/CV_Jorge_Andrade_Espanol.pdf";
  const pdfEnglish = "/CV_Jorge_Andrade_English.pdf";
  const pathPDFEspanol =
    window.location.origin + window.location.pathname + pdfEspanol;
  const pathPDFEnglish =
    window.location.origin + window.location.pathname + pdfEnglish;
  return (
    <>
      <div className="tituloH2" id="aboutMe">
        <h2>About Me</h2>
      </div>
      <div className={Style.container}>
        <div className={Style.containerLeft}>
          <h3 className="tituloH2">{name + " " + lastName}</h3>
          <p>
            <span className={Style.spanText}>Full Stack Developer</span> con
            formación como{" "}
            <span className={Style.spanText}>Ingeniero Industrial</span>.
            Experiencias trabajando en{" "}
            <span className={Style.spanText}>NodeJS</span>,{" "}
            <span className={Style.spanText}>React</span>,{" "}
            <span className={Style.spanText}>Redux</span>,{" "}
            <span className={Style.spanText}>SQL</span> entre otras tecnologías
            del sector. Creador pagina web{" "}
            <a className={Style.spanText} href="https://guiadeparche.com">
              guiadeparche.com
            </a>{" "}
            posicionada como <span className={Style.spanText}>#1</span> en{" "}
            <span className={Style.spanText}>SEO</span>. Me destaco por
            pensamiento creativo, resolución de problemas, trabajo en equipo,
            comunicación y autonomía.
          </p>

          <div className={Style.containerCVAll}>
            <p>
              Descargar mi <span className={Style.spanText}>CV</span> (Español -
              Ingles)
            </p>
            <div className={Style.containerCV}>
              <div className={Style.containerCV_Img}>
                <a href={pathPDFEspanol} download="Jorge Andrade PDF Español">
                  <img
                    src="https://img.icons8.com/fluency/48/null/worker-id-card.png"
                    alt="Curriculum ES"
                  />
                  <img
                    className={Style.flag}
                    src="https://img.icons8.com/color/48/null/spain2-circular.png"
                    alt="Bandera español"
                    width={"25px"}
                  />
                </a>
              </div>
              <div className={Style.containerCV_Img}>
                <a href={pathPDFEnglish} download="Jorge Andrade PDF English">
                  <img
                    src="https://img.icons8.com/fluency/48/null/worker-id-card.png"
                    alt="Curriculum EN"
                  />
                  <img
                    className={Style.flag}
                    src="https://img.icons8.com/color/48/null/usa-circular.png"
                    alt="Flag USA"
                    width={"25px"}
                  />
                </a>
              </div>
            </div>
          </div>
          <SocialMedia />
        </div>
        <div className={Style.containerRight}>
          <img
            //className={Style["image-cropped-transform"]}
            className={Style.imgProfile}
            src={ImgJorge}
            alt="ProfesorJand Perfil Img"
          />
        </div>
      </div>
    </>
  );
}
