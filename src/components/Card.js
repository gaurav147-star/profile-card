import React, { Component } from "react";

import db from './Firebase';


// import { Link } from "react-router-dom";
import './card.css'
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { profilecard: [] }
    }
    componentDidMount() {
        db.ref("profilecard").on("value", snapshot => {
            let profilecard = [];
            snapshot.forEach(snap => {
                profilecard.push(snap.val());
            });
            this.setState({ profilecard: profilecard });
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.state.profilecard.map(data => {
                        return (
                            <div className="card">
                                <div className="bg-image">
                                    <img src="../assets/bg-image.jpg" alt="bla" />
                                </div>
                                <div className="pic">
                                    <img src="../assets/pic.png" alt="" />
                                </div>
                                <div className="info">
                                    <h3>{data.name}</h3>
                                    <span><i className="fa fa-code">Web Designer</i></span>
                                    <p>{data.skill}</p>
                                    <div className="icons">
                                        <a rel="noreferrer"  href={data.github} target="_blank" ><i className="fab fa-github"></i></a>
                                        <a rel="noreferrer"  href={data.twitter} target="_blank" ><i className="fab fa-twitter"></i></a>
                                        <a rel="noreferrer"  href={data.insta} target="_blank" ><i className="fab fa-instagram"></i></a>
                                        <a rel="noreferrer"  href={data.email} target="_blank" ><i className="fab fa-envelope-square"></i></a>
                                        
                                            {/* <Link to="" className="fab fa-github" target="_blank"></Link>
                                            <Link to="" className="fab fa-twitter" target="_blank"></Link>
                                            <Link to={data.insta} className="fab fa-instagram" target="_blank"></Link>
                                            <Link to=`${data.email}` className="fab fa-envelope" aria-hidden="true" target="_blank"></Link> */}
                                    </div>
                                </div>
                            </div>

                        )
                    })}


                </div>
            </div>
        );
    }
}

