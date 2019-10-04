import React, { Component } from 'react';
import GithubSvg from '../svg/github.svg';
import LinkedinSvg from '../svg/linkedin.svg';
import SoundcloudSvg from '../svg/soundcloud.svg';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                        <h1 className="title">EVREN VURAL</h1>
                        <h2 className="sub-title">SOFTWARE ENGINEER</h2>
                        </a>
                        
                    </div>
                    <div className="links">
                        <a href="https://github.com/evrenvural" target="_blank">
                            <img className="link" src={GithubSvg} alt="Github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/evrenvural/" target="_blank">
                            <img className="link" src={LinkedinSvg} alt="Linkedin"/>
                        </a>
                        <a href="https://soundcloud.com/evren-vural" target="_blank">
                            <img className="link" src={SoundcloudSvg} alt="SoundCloud"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
