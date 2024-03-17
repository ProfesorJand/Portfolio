import Style from './skills.module.css';

export default function Skills({ lenguage }) {
  //https://icons8.com/
  const skills = {
    Frontend: [
      {
        skillName: 'Astro',
        urlImage: 'https://img.icons8.com/nolan/64/astro-js.png',
      },
      {
        skillName: 'React',
        urlImage: 'https://img.icons8.com/officel/80/null/react.png',
      },
      {
        skillName: 'Boostrap',
        urlImage: 'https://img.icons8.com/color/48/null/bootstrap.png',
      },
      {
        skillName: 'CSS3',
        urlImage: 'https://img.icons8.com/color/48/null/css3.png',
      },
      {
        skillName: 'HTML5',
        urlImage: 'https://img.icons8.com/color/48/null/html-5--v1.png',
      },
      {
        skillName: 'Javascript',
        urlImage: 'https://img.icons8.com/color/48/null/javascript--v1.png',
      },
      {
        skillName: 'Redux',
        urlImage: 'https://img.icons8.com/color/48/null/redux.png',
      },
      {
        skillName: 'Next',
        urlImage: 'https://img.icons8.com/nolan/64/nextjs.png',
      },
    ],

    Backend: [
      {
        skillName: 'Rest API',
        urlImage: 'https://img.icons8.com/ultraviolet/40/null/api-settings.png',
      },
      {
        skillName: 'Auth0',
        urlImage:
          'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-shadow-tal-revivo.png',
      },
      {
        skillName: 'Sequelize',
        urlImage: 'https://hyunseob.github.io/images/sequelizejs.png',
      },
      {
        skillName: 'MongoDB',
        urlImage: 'https://img.icons8.com/color/48/null/mongodb.png',
      },
      {
        skillName: 'Node JS',
        urlImage: 'https://img.icons8.com/fluency/48/null/node-js.png',
      },
      {
        skillName: 'Postgres',
        urlImage: 'https://img.icons8.com/color/48/null/postgreesql.png',
      },
      {
        skillName: 'MySQL',
        urlImage: 'https://img.icons8.com/color/48/null/mysql-logo.png',
      },
      {
        skillName: 'Python',
        urlImage: 'https://img.icons8.com/color/48/null/python--v1.png',
      },
      {
        skillName: 'PHP',
        urlImage: 'https://img.icons8.com/officel/40/null/php-logo.png',
      },
    ],
    Others: [
      {
        skillName: 'SCRUM',
        urlImage:
          'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-scrum-agile-flaticons-flat-flat-icons-2.png',
      },
      {
        skillName: 'Git',
        urlImage: 'https://img.icons8.com/color/48/null/git.png',
      },
      {
        skillName: 'Github',
        urlImage: 'https://img.icons8.com/sf-black-filled/64/null/github.png',
      },
      {
        skillName: 'Wordpress',
        urlImage: 'https://img.icons8.com/nolan/64/wordpress.png',
      },
      {
        skillName: 'Figma',
        urlImage: 'https://img.icons8.com/color/48/null/figma--v1.png',
      },
      {
        skillName: 'Trello',
        urlImage: 'https://img.icons8.com/color/48/null/trello.png',
      },
      {
        skillName: 'Photoshop',
        urlImage:
          'https://img.icons8.com/color/48/null/adobe-photoshop--v1.png',
      },
      {
        skillName: 'DaVinci Resolve',
        urlImage: 'https://img.icons8.com/color/48/null/davinci-resolve.png',
      },
      {
        skillName: 'OBS',
        urlImage: 'https://img.icons8.com/ios-filled/50/null/obs-studio.png',
      },
    ],
  };

  const Skills = {
    Frontend: {
      es: 'Frontend',
      en: 'Frontend',
    },
    Backend: {
      es: 'Backend',
      en: 'Backend',
    },
    Others: {
      es: 'Otros',
      en: 'Others',
    },
    es: 'Habilidades',
    en: 'Skills',
  };
  return (
    <section id="skills">
      <div className="tituloH2">
        <h2>{Skills[lenguage]}</h2>
      </div>
      <div className={Style.container}>
        {Object.keys(skills).map((skill) => {
          return (
            <div className={Style.containerH2Skills} key={skill}>
              <h2 className={Style.titulo}>{Skills[skill][lenguage]}</h2>
              <div className={Style.containerSkills}>
                {skills[skill].map((s) => {
                  return (
                    <div className={Style.skill} key={s.skillName}>
                      <img
                        className={Style.imgSkills}
                        src={s.urlImage}
                        alt={'Logo ' + s.skillName}
                      ></img>
                      <p>{s.skillName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
