import React, { Component } from 'react';
import Navbar from './Navbar';
import CheckSvg from '../svg/check.svg';

import githubSvg from '../svg/github.svg';
import mediumSvg from '../svg/medium.svg';
import linkedinSvg from '../svg/linkedin.svg';
import soundcloudSvg from '../svg/soundcloud.svg';

export default class MyPage extends Component {
    constructor(){
        super();

        this.state = {
            person : {
                name: "EVREN VURAL",
                job: "SOFTWARE ENGINEER",
                links: [
                    {
                        name: "Github",
                        icon: githubSvg,
                        url: "https://github.com/evrenvural"
                    },
                    {
                        name: "Medium",
                        icon: mediumSvg,
                        url: "https://medium.com/@evrenvural"
                    },
                    {
                        name: "Linkedin",
                        icon: linkedinSvg,
                        url: "https://www.linkedin.com/in/evrenvural/"
                    },
                    {
                        name: "Soundcloud",
                        icon: soundcloudSvg,
                        url: "https://soundcloud.com/evren-vural"
                    }
                ],
                skills: [
                    "C#", "Java"
                ],
                educations: [
                    "Sakarya Üniversitesi Bilgisayar Mühendisliği Bölümü",
                    "Muammer Dereli Fen Lisesi"
                ],
                interests: [
                    "Chess", "Masa Tenisi", "Music"
                ],
                experiences: [
                    "Doggo Agust-Still"
                ],
                projects: [],
                articles: []
            }
        }
    }
    render() {
        return (
            <div className="my-page">
                <Navbar 
                    name = {this.state.person.name}
                    job = {this.state.person.job}
                    links = {this.state.person.links}
                />

                <div className="skills-and-school">
                    <div className="container">

                        <div className="attribute">
                            <div className="lists">
                                <h2 className="title">Skills</h2>
                                {this.state.person.skills.map(item=>(
                                    <div className="list">
                                        <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                        <span className="text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="attribute">
                            <div className="lists">
                                <h2 className="title">Education</h2>

                                {this.state.person.educations.map(item=>(
                                    <div className="list">
                                        <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                        <span className="text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="attribute">
                            <div className="lists">
                                <h2 className="title">Interests</h2>

                                {this.state.person.interests.map(item=>(
                                    <div className="list">
                                        <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                        <span className="text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="experiences">
                        <div className="container">
                            <div className="attribute">
                                <div className="lists">
                                    <h2 className="title">Experiences</h2>

                                    {this.state.person.experiences.map(item=>(
                                        <div className="list">
                                            <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                            <span className="text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projects">
                        <div className="container">
                            <div className="table">
                                <div className="table-head">
                                    <div className="container">
                                        <img className="svg" src={githubSvg} alt="Github" />
                                        <h2 className="title">Open Source Projects</h2>
                                    </div>
                                </div>
                                <div className="table-body">
                                    <div className="datas">
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="writings">
                        <div className="container">
                            <div className="table">
                                <div className="table-head">
                                    <div className="container">
                                        <img className="svg" src={mediumSvg} alt="Github" />
                                        <h2 className="title">Articles</h2>
                                    </div>
                                </div>
                                <div className="table-body">
                                    <div className="datas">
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com" target="_blank">
                                            <div className="data">
                                                <h2 className="title">stopwdsatch-football</h2>
                                                <div className="text">Kronometre Futbol Oyunu is a nostalgic football game which can play on stopwatch</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
