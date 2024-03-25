import React from 'react';
import Style from './proyects.module.css';
import { FaEye, FaStar } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import imgNoAvailable from '../../Images/no-image-available.jpg';
import repo from '../../json/repositories.json';
import orgs from '../../json/organitations.json';

export default function Proyects({ lenguage }) {
  const githubProyects = {
    es: 'Proyectos - Github',
    en: 'Github - Proyects',
  };
  const githubOrganization = {
    es: 'Organizaciones - Github',
    en: 'Github - Organitations',
  };

  return (
    <>
      <section id="proyects">
        <div className="tituloH2">
          <h2>{githubProyects[lenguage]}</h2>
        </div>
        <div className={Style.containerProyects}>
          {repo &&
            repo.map((r) => {
              return (
                <div
                  className={`${Style.container} mySlides w3-animate-fading`}
                  key={r.id}
                >
                  <h2>{r.name[lenguage]}</h2>
                  <img
                    className={`${Style.img_thumbnail}`}
                    src={`https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = imgNoAvailable;
                    }}
                    alt={'Repo thumbnail ' + r.full_name}
                  />
                  <p>{r.description[lenguage]}</p>
                  <div className={Style.Info_Actions_Github}>
                    <div>
                      <FaStar></FaStar> {r.stargazers_count}
                    </div>
                    <div>
                      <FaEye></FaEye> {r.watchers_count}
                    </div>
                    <div>
                      <BiGitRepoForked></BiGitRepoForked> {r.forks_count}
                    </div>
                  </div>
                  <div className={Style.containersCTA}>
                    <input
                      className={Style.InputGithub}
                      value="Repository"
                      type="button"
                      onClick={() => {
                        window.open(r.github_url, '_blank');
                      }}
                    ></input>
                    {r.homepage && (
                      <input
                        className={Style.InputGithub}
                        value="Deploy"
                        type="button"
                        onClick={() => {
                          window.open(r.homepage, '_blank');
                        }}
                      ></input>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section id="organizations">
        <div className="tituloH2">
          <h2>{githubOrganization[lenguage]}</h2>
        </div>
        <div className={Style.containerOrganitation}>
          {orgs &&
            orgs.map((r) => {
              return (
                <div
                  className={`${Style.container} mySlides w3-animate-fading`}
                  key={r.id}
                >
                  <h2>{r.name[lenguage]}</h2>
                  <img
                    className={`${Style.img_thumbnail}`}
                    src={r.avatar_url}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = imgNoAvailable;
                    }}
                    alt={'Repo thumbnail ' + r.full_name}
                  />
                  <p>{r.description[lenguage]}</p>
                  <div className={Style.Info_Actions_Github}>
                    <div>
                      <FaStar></FaStar> {r.stargazers_count}
                    </div>
                    <div>
                      <FaEye></FaEye> {r.watchers_count}
                    </div>
                    <div>
                      <BiGitRepoForked></BiGitRepoForked> {r.forks_count}
                    </div>
                    {}
                  </div>

                  <input
                    className={Style.InputGithub}
                    value="Go Repository"
                    type="button"
                    onClick={() => {
                      window.open(r.html_url, '_blank');
                    }}
                  ></input>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
