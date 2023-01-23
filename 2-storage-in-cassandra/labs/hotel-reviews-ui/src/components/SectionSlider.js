import { React, useEffect, useState } from "react"

const SectionSlider = () => {

    return (
       <section class="slider">
                    <div id="slider" class="flexslider">
                        <ul class="slides">
                            <li>
                                <img src="img/home/sanjose_big.jpeg" alt=""/>
                                <div class="meta">
                                    <h3>Nevermind your experience, get proficient with Cassandra</h3>
                                    <div class="info">
                                        <p>81 hotel(s)</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/home/vienna_big.jpg" alt=""/>
                                <div class="meta">
                                    <h3>Vienna, rich history and cultural heritage</h3>
                                    <div class="info">
                                        <p>81 hotel(s)</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/home/milano_big.jpeg" alt=""/>
                                <div class="meta">
                                    <h3>Milan, capital of fashion and Opera</h3>
                                    <div class="info">
                                        <p>72 hotel(s)</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/home/paris_big.jpeg" alt=""/>
                                <div class="meta">
                                    <h3>Paris, The romantic city</h3>
                                    <div class="info">
                                        <p>263 hotel(s)</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/home/london_big.jpeg" alt=""/>
                                <div class="meta">
                                    <h3>London, vibrant with a bustling cosmopolitan atmosphere</h3>
                                    <div class="info">
                                        <p>356 hotel(s)</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/home/barcelona_big.jpeg" alt=""/>
                                <div class="meta">
                                    <h3>Barcelona, Architecture, delicious cuisine, and lively atmosphere.</h3>
                                    <div class="info">
                                        <p>132 hotel(s)</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                        </ul>
                        <div id="icon_drag_mobile"></div>
                    </div>
                    <div id="carousel_slider_wp">
                        <div id="carousel_slider" class="flexslider">
                            <ul class="slides">
                                <li>
                                    <img src="img/home/sanjose.jpeg" alt=""/>
                                    <div class="caption">
                                        <h3>San Jose <span>U.S.A (CA)</span></h3>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/home/vienna.jpg" alt=""/>
                                    <div class="caption">
                                        <h3>Vienna <span>Austria</span></h3>
                                        <small>81 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/home/milano.jpeg" alt=""/>
                                    <div class="caption">
                                        <h3>Milano <span>Italy</span></h3>
                                        <small>72 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/home/paris.jpeg" alt=""/>
                                    <div class="caption">
                                        <h3>Paris <span>France</span></h3>
                                        <small>263 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/home/london.jpeg" alt=""/>
                                    <div class="caption">
                                        <h3>London <span>United kingdom</span></h3>
                                        <small>356 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/home/barcelona.jpeg" alt=""/>
                                    <div class="caption">
                                        <h3>Barcelona <span>Spain</span></h3>
                                        <small>132 hotel(s)</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                )
}

export default SectionSlider;