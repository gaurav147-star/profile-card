import React from 'react'

import firebase from './Firebase';
import { Link } from "react-router-dom";
import './card.css'
const card = () => {

    
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="bg-image">
                        <img src="../assets/bg-image.jpg" alt="bla" />
                    </div>
                    <div className="pic">
                        <img src="../assets/pic.png" alt="" />
                    </div>
                    <div className="info">
                        <h3>Gaurav Gupta</h3>
                        <span><i className="fa fa-code">Web Designer</i></span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quos unde tempora libero earum labore voluptates aliquid assumenda! Beatae, corporis!</p>
                        <div className="icons">
                            <Link to="#" className="fab fa-github"></Link>
                            <Link to="#" className="fab fa-twitter"></Link>
                            <Link to="#" className="fab fa-instagram"></Link>
                            <Link to="#" className="fab fa-twitter"></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="bg-image">
                        <img src="../assets/bg-image.jpg" alt="bla" />
                    </div>
                    <div className="pic">
                        <img src="../assets/pic.png" alt="" />
                    </div>
                    <div className="info">
                        <h3>Gaurav Gupta</h3>
                        <span><i className="fa fa-code">Web Designer</i></span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quos unde tempora libero earum labore voluptates aliquid assumenda! Beatae, corporis!</p>
                        <div className="icons">
                            <Link to="#" className="fab fa-github"></Link>
                            <Link to="#" className="fab fa-twitter"></Link>
                            <Link to="#" className="fab fa-instagram"></Link>
                            <Link to="#" className="fab fa-twitter"></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="bg-image">
                        <img src="../assets/bg-image.jpg" alt="bla" />
                    </div>
                    <div className="pic">
                        <img src="../assets/pic.png" alt="" />
                    </div>
                    <div className="info">
                        <h3>Gaurav Gupta</h3>
                        <span><i className="fa fa-code">Web Designer</i></span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quos unde tempora libero earum labore voluptates aliquid assumenda! Beatae, corporis!</p>
                        <div className="icons">
                            <Link to="#" className="fab fa-github"></Link>
                            <Link to="#" className="fab fa-twitter"></Link>
                            <Link to="#" className="fab fa-instagram"></Link>
                            <Link to="#" className="fab fa-twitter"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card
