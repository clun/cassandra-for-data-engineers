import { React, useEffect, useState } from "react"

const SectionCarousel = () => {
    
    return (

<div className="container container-custom margin_80_0">
    <div className="main_title_2">
        <span><em></em></span>
        <h2>Popular hotels</h2>
        <p>This is the top 3 hotels of the city</p>
    </div>

    <div className="isotope-wrapper">
        <div className="box_list isotope-item latest">
            <div className="row g-0">
                <div className="col-lg-5">
                    <figure>
                        <small>Parirs Centre</small>
                        <a href="hotel-detail.html">
                            <img src="img/home/hotel_1.jpeg" className="img-fluid" alt="" width="800" height="533" />
                            <div className="read_more"><span>Read more</span></div>
                        </a>
                    </figure>
                </div>
                <div className="col-lg-7">
                    <div className="wrapper">
                        <a href="#0" className="wish_bt"></a>
                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
                        <h3><a href="hotel-detail.html">Park Hyatt Hotel</a></h3>
                        <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                        <span className="price">From <strong>$54</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i className="ti-eye"></i> 164 views</li>
                        <li>
                            <div className="score">
                                <span>Superb<em>350 Reviews</em></span><strong>8.9</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="box_list isotope-item popular">
            <div className="row g-0">
                <div className="col-lg-5">
                    <figure>
                        <small>Parirs Centre</small>
                        <a href="hotel-detail.html">
                            <img src="img/home/hotel_2.jpeg" className="img-fluid" alt="" width="800" height="533" />
                            <div className="read_more"><span>Read more</span></div>
                        </a>
                    </figure>
                </div>
                <div className="col-lg-7">
                    <div className="wrapper">
                        <a href="#0" className="wish_bt"></a>
                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
                        <h3><a href="hotel-detail.html">Mariott Hotel</a></h3>
                        <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                        <span className="price">From <strong>$124</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i className="ti-eye"></i> 164 views</li>
                        <li>
                            <div className="score">
                                <span>Good<em>350 Reviews</em></span><strong>7.0</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="box_list isotope-item latest">
            <div className="row g-0">
                <div className="col-lg-5">
                    <figure>
                        <small>Parirs Centre</small>
                        <a href="tour-detail.html">
                            <img src="img/home/hotel_3.jpeg" className="img-fluid" alt="" width="800" height="533" />
                            <div className="read_more"><span>Read more</span></div>
                        </a>
                    </figure>
                </div>
                <div className="col-lg-7">
                    <div className="wrapper">
                        <a href="#0" className="wish_bt"></a>
                        <div className="cat_star"><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i></div>
                        <h3><a href="hotel-detail.html">Lumiere Hotel</a></h3>
                        <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
                        <span className="price">From <strong>$45</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i className="ti-eye"></i> 164 views</li>
                        <li>
                            <div className="score">
                                <span>Good<em>350 Reviews</em></span><strong>7.0</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">View all</a></p>
    <hr className="large" />
</div>
        

    )
}

export default SectionCarousel;
