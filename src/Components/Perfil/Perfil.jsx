import React from 'react';
import Style from './perfil.module.css';
import ImgJorge from '../../Images/Foto_cuadrada_Jorge.jpg';
import SocialMedia from '../SocialMedia/SocialMedia.jsx';
import Skills from '../Skills/Skills.jsx';

export default function Perfil({ lenguage }) {
  const name = 'Jorge';
  const lastName = 'Andrade';
  const pdfEspanol = '/CV_Jorge_Andrade_Espanol.pdf';
  const pdfEnglish = '/CV_Jorge_Andrade_English.pdf';
  const pathPDFEspanol =
    window.location.origin + window.location.pathname + pdfEspanol;
  const pathPDFEnglish =
    window.location.origin + window.location.pathname + pdfEnglish;
  const textAboutMe = {
    es: {
      aboutMe: 'Acerca de mí',
      degree: 'Desarrollador Full Stack',
      text1: 'con formación como',
      ingDegree: 'Ingeniero Industrial',
      text2: 'Experiencia trabajando en',
      NodeJS: 'NodeJS',
      React: 'React',
      Redux: 'Redux',
      SQL: 'SQL',
      text3: 'entre otras tecnologías del sector. Creador pagina web',
      webPage: 'guiadeparche.com',
      text4: 'posicionada como',
      number: '#1',
      text5: 'en',
      SEO: 'SEO',
      text6:
        '. Me destaco por pensamento creativo, resolución de problemas, trabajo en equipo, comunicación y autonomía.',
      text7: 'Descargar mi ',
      CV: 'CV',
      lenguage: '(Español - Ingles)',
    },
    en: {
      aboutMe: 'About me',
      degree: 'Full Stack Developer',
      text1: 'with formation in',
      ingDegree: 'Industrial Engineer',
      text2: 'Experience in',
      NodeJS: 'NodeJS',
      React: 'React',
      Redux: 'Redux',
      SQL: 'SQL',
      text3: 'among other technologies in the sector. Website creator',
      webPage: 'guiadeparche.com',
      text4: 'position',
      number: '#1',
      text5: 'in',
      SEO: 'SEO',
      text6:
        '. I stand out for creative thinking, problem solving, teamwork, communication and autonomy.',
      text7: 'Download my ',
      CV: 'CV',
      lenguage: '(Spanish - English)',
    },
  };

  return (
    <>
      <div className="tituloH2" id="aboutMe">
        <h2>{textAboutMe[lenguage]['aboutMe']}</h2>
      </div>
      <div className={Style.container}>
        <div className={Style.containerLeft}>
          <h3 className="tituloH2">{name + ' ' + lastName}</h3>
          <p>
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['degree']}
            </span>{' '}
            {textAboutMe[lenguage]['text1']}{' '}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['ingDegree']}
            </span>
            . {textAboutMe[lenguage]['text2']}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['Nodejs']}
            </span>
            ,{' '}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['React']}
            </span>
            ,{' '}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['Redux']}
            </span>
            ,{' '}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['SQL']}
            </span>{' '}
            {textAboutMe[lenguage]['text3']}{' '}
            <a className={Style.spanText} href="https://guiadeparche.com">
              {textAboutMe[lenguage]['webPage']}
            </a>{' '}
            {textAboutMe[lenguage]['text4']}{' '}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['number']}
            </span>{' '}
            {textAboutMe[lenguage]['text5']}{' '}
            <span className={Style.spanText}>
              {textAboutMe[lenguage]['SEO']}
            </span>
            {textAboutMe[lenguage]['text6']}
          </p>

          <div className={Style.containerCVAll}>
            <p>
              {textAboutMe[lenguage]['text7']}{' '}
              <span className={Style.spanText}>
                {textAboutMe[lenguage]['CV']}
              </span>{' '}
              {textAboutMe[lenguage]['lenguage']}
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
                    width={'25px'}
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
                    width={'25px'}
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
