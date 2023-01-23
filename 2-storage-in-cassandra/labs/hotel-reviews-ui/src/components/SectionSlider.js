import { React, useEffect, useState } from "react"

const SectionSlider = () => {

    return (
       <section class="slider">
                    <div id="slider" class="flexslider">
                        <ul class="slides">
                            <li>
                                <img src="img/flex_slides/sanjose.jpg" alt=""/>
                                <div class="meta">
                                    <h3>Nevermind your experience, get proficient with Cassandra</h3>
                                    <div class="info">
                                        <p>But for now, <span style={{color: 'yellow'}}>Pick a CITY</span> to look for hotels</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/flex_slides/slide_2.jpg" alt=""/>
                                <div class="meta">
                                    <h3>Dubai, The most attractive destination</h3>
                                    <div class="info">
                                        <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/flex_slides/slide_3.jpg" alt=""/>
                                <div class="meta">
                                    <h3>Cairo, Traditions and culture</h3>
                                    <div class="info">
                                        <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/flex_slides/slide_4.jpg" alt=""/>
                                <div class="meta">
                                    <h3>Nassau, Unique beaches and horizons</h3>
                                    <div class="info">
                                        <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
                                    </div>
                                    <a href="tour-detail.html" class="btn_1">Read more</a>
                                </div>
                            </li>
                            <li>
                                <img src="img/flex_slides/slide_5.jpg" alt=""/>
                                <div class="meta">
                                    <h3>Rome, The Eternal City</h3>
                                    <div class="info">
                                        <p><strong>220</strong> Hotels - <strong>150</strong> Restaurant</p>
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
                                    <img src="img/vienna.jpg" alt=""/>
                                    <div class="caption">
                                        <h3>Vienna <span>Austria</span></h3>
                                        <small>81 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/milano.jpeg" alt=""/>
                                    <div class="caption">
                                        <h3>Milano <span>Italy</span></h3>
                                        <small>72 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/flex_slides/slide_2_thumb.jpg" alt=""/>
                                    <div class="caption">
                                        <h3>Paris <span>France</span></h3>
                                        <small>263 hotel(s)</small>
                                    </div>
                                </li>
                                <li>
                                    <img src="img/flex_slides/slide_3_thumb.jpg" alt=""/>
                                    <div class="caption">
                                        <h3>London <span>United kingdom</span></h3>
                                        <small>356 hotel(s)</small>
                                    </div>
                                </li>
                               
                                <li>
                                    <img src="img/flex_slides/slide_5_thumb.jpg" alt=""/>
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