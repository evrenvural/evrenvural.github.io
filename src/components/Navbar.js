import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                        <h1 className="title">{this.props.name}</h1>
                        <h2 className="sub-title">{this.props.job}</h2>
                        </a>
                        
                    </div>
                    <div className="links">
                        {this.props.links.map(item => (
                            <a href={item.url} target="_blank">
                                <img className="link" src={item.icon} alt={item.name}/>
                            </a>    
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
Navbar.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    links: PropTypes.array 
};

Navbar.defaultProps = {
    name: "UNKNOWN PERSON",
    job: "UNKNOWN JOB",
    links: []
};
