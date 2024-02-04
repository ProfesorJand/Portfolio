import React, { useEffect, useState } from 'react';
import Style from './proyects.module.css';
import axios from 'axios';
import { FaEye, FaStar, FaClone } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import imgNoAvailable from '../../Images/no-image-available.jpg';

import { IconContext } from 'react-icons';
//
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from "react-responsive-carousel";

export default function Proyects() {
  const [repo, setRepo] = useState(null);
  const [orgs, setOrgs] = useState([]);
  const [members, setMembers] = useState({});

  useEffect(() => {
    repos();
    organisations();
  }, []);

  useEffect(() => {
    console.log(members);
  }, [members]);

  function repos() {
    axios
      .get('https://api.github.com/users/ProfesorJand/repos')
      .then((r) => r.data)
      .then((r) => setRepo(r));
    return;
  }

  function organisations() {
    // axios
    //   .get("https://api.github.com/users/ProfesorJand/orgs")
    //   .then((r)=> r.data.forEach((e,i)=>
    //     axios
    //       .get(e.repos_url)
    //       .then((r) => r.data)
    //       .then((r) => {
    //         r.forEach((e, i) =>
    //           axios.get(e.assignees_url.replace("{/user}", "")).then((member) => {
    //             let array = [];
    //             array[i] = { [e.name]: member.data };
    //             setMembers((m) => ({...m,[e.name]: member.data}) );
    //           })
    //         );
    //         setOrgs((old)=>[...old, r]);
    //       })
    //   ))

    axios
      .get(`https://api.github.com/orgs/PT07G05-Henry/repos`)
      .then((r) => r.data)
      .then((r) => {
        r.forEach((e, i) =>
          axios.get(e.assignees_url.replace('{/user}', '')).then((member) => {
            let array = [];
            array[i] = { [e.name]: member.data };
            setMembers((m) => ({ ...m, [e.name]: member.data }));
          })
        );
        setOrgs(r);
      });
  }

  return (
    <>
      <div className="tituloH2" id="proyects">
        <h2>Github - Proyects</h2>
      </div>
      <div className={Style.containerProyects}>
        {/* <Carousel> */}
        {repo &&
          repo.map((r) => {
            const imgUrl = `https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`;
            return (
              <div
                className={Style.container + ` mySlides` + ` w3-animate-fading`}
                key={r.id}
              >
                <h2>{r.name}</h2>
                <img
                  className={`${Style.img_thumbnail}`}
                  src={`https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = imgNoAvailable;
                  }}
                  alt={'Repo thumbnail ' + r.full_name}
                />
                <p>{r.description}</p>
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
        {/* </Carousel> */}
      </div>
      <div className="tituloH2" id="proyects">
        <h2>Github - Organitations</h2>
      </div>
      <div className={Style.containerProyects}>
        {/* <Carousel> */}
        {orgs &&
          orgs.map((r) => {
            const imgUrl = `https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`;
            return (
              <div
                className={Style.container + ` mySlides` + ` w3-animate-fading`}
                key={r.id}
                // onClick={() => {
                //   window.open(r.html_url, "_blank");
                // }}
              >
                <h2>{r.name}</h2>
                <img
                  className={`${Style.img_thumbnail}`}
                  src={`https://raw.githubusercontent.com/${r.full_name}/main/thumbnail.png`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = imgNoAvailable;
                  }}
                  alt={'Repo thumbnail ' + r.full_name}
                />
                <p>{r.description}</p>
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

                <input
                  className={Style.InputGithub}
                  value="Go Repository"
                  type="button"
                  onClick={() => {
                    window.open(r.html_url, '_blank');
                  }}
                ></input>
                <div className={Style.Members}>
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
                </div>
              </div>
            );
          })}
        {/* </Carousel> */}
      </div>
    </>
  );
}
