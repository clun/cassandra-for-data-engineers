import React from "react";

const HotelReviewsList = () => {

    return (
        <section id="reviews">
            <h2>Reviews</h2>
            <div className="reviews-container">
                <div className="row">
                    <div className="col-lg-3">
                        <div id="review_summary">
                            <strong>8.5</strong>
                            <em>Superb</em>
                            <small>Based on 4 reviews</small>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div claclassNamess="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:'90%'}} aria-valuenow="90" 
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:'95%'}}
                                    aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:'60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:'20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div clclassNameass="progress-bar" 
                                    role="progressbar" style={{width:'0'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                        </div>

                    </div>
                </div>

            </div>

            <hr />

            <div class="reviews-container">

                <div class="review-box clearfix">
                    <figure class="rev-thumb"><img src="img/avatar1.jpg" alt="" />
                    </figure>
                    <div class="rev-content">
                        <div class="rating">
                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                        </div>
                        <div class="rev-info">
                            Admin – April 03, 2016:
                        </div>
                        <div class="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>

                <div class="review-box clearfix">
                    <figure class="rev-thumb"><img src="img/avatar2.jpg" alt="" />
                    </figure>
                    <div class="rev-content">
                        <div class="rating">
                            <i class="icon-star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                        </div>
                        <div class="rev-info">
                            Ahsan – April 01, 2016:
                        </div>
                        <div class="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                <div class="review-box clearfix">
                    <figure class="rev-thumb"><img src="img/avatar3.jpg" alt="" />
                    </figure>
                    <div class="rev-content">
                        <div class="rating">
                            <i class="icon-star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
                        </div>
                        <div class="rev-info">
                            Sara – March 31, 2016:
                        </div>
                        <div class="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HotelReviewsList;