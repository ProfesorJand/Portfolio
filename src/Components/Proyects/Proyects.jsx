import React, { useEffect, useState } from 'react';
import Style from './proyects.module.css';
import axios from 'axios';
import { FaEye, FaStar, FaClone } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import imgNoAvailable from '../../Images/no-image-available.jpg';
import repo from '../../json/repositories.json';
import orgs from '../../json/organitations.json';
import { IconContext } from 'react-icons';
//
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from "react-responsive-carousel";

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
          {/* <Carousel> */}
          {repo &&
            repo.map((r) => {
              const imgUrl = `https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`;
              return (
                <div
                  className={
                    Style.container + ` mySlides` + ` w3-animate-fading`
                  }
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
                    {/* <div>
                    <FaClone
                      onClick={() => {
                        const fork = document.getElementById(`${r.name}`);
                        fork.select();
                        document.execCommand("copy");
                        console.log("copiado")
                      }}
                    ></FaClone>
                <input type="text" value={r.clone_url} id={r.name} ></input>
                  </div> */}
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
              //const imgUrl = `https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`;
              return (
                <div
                  className={
                    Style.container + ` mySlides` + ` w3-animate-fading`
                  }
                  key={r.id}
                  // onClick={() => {
                  //   window.open(r.html_url, "_blank");
                  // }}
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
                  {/* <div className={Style.Members}>
                  {members &&
                    members[r.name] &&
                    members[r.name].map((m) => {
                      return (
                        <a href={m.html_url} target="_blank">
                          <img
                            className={Style.img_member}
                            src={m.avatar_url}
                            alt={`member ${m.login}`}
                          />
                        </a>
                      );
                    })}
                </div> */}
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

//fork
/* <div>
                    <FaClone
                      onClick={() => {
                        const fork = document.getElementById(`${r.name}`);
                        fork.select();
                        document.execCommand("copy");
                        console.log("copiado")
                      }}
                    ></FaClone>
                <input type="text" value={r.clone_url} id={r.name} ></input>
                  </div> */
