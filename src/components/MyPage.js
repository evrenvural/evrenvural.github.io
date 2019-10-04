import React, { Component } from 'react';
import Navbar from './Navbar';
import CheckSvg from '../svg/check.svg';

export default class MyPage extends Component {
    render() {
        return (
            <div className="my-page">
                <Navbar />

                <div className="attributes">
                    <div className="container">

                        <div className="attribute">
                            <div className="lists">
                                <h2 className="title">Skills</h2>

                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjsdsjaklhgda</span>
                                </div>
                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjhdaslkjdhsa</span>
                                </div>
                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjhdaslkjdhsa</span>
                                </div>
                            </div>
                        </div>

                        <div className="attribute">
                            <div className="lists">
                                <h2 className="title">Skills</h2>

                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjsdsjaklhgda</span>
                                </div>
                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjhdaslkjdhsa</span>
                                </div>
                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjhdaslkjdhsa</span>
                                </div>
                            </div>
                        </div>

                        <div className="attribute">
                            <div className="lists">
                                <h2 className="title">Skills</h2>

                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjsdsjaklhgda</span>
                                </div>
                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjhdaslkjdhsa</span>
                                </div>
                                <div className="list">
                                    <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                    <span className="text">asjhdaslkjdhsa</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="experiences">
                        <div className="lists">
                            <h2 className="title">Relevant Experiences</h2>

                            <div className="list">
                                <img className="check" src={CheckSvg} alt="Check Icon"></img>
                                <span className="text">asjsdsjaklhgda</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

                )
            }
        }
