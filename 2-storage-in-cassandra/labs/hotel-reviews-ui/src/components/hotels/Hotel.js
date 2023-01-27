import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RatingStars from "../ui/RatingStars"

/**
 * Render one hotel in the hotel list.
 */
const Hotel = ({ hotel, city }) => {
 
  /**
   * Accessing thumbnail or default
   */
  const hotel_thumbnail= (hotel.hotel_thumbnail === null) ? 'img/home/' + city + '_big.jpeg' : hotel.hotel_thumbnail;
  const hotel_price= (hotel.hotel_price === null) ? 500 : hotel.hotel_price;
  
  /**
   * Render an hotel
   */
  return (
    <div className="box_list isotope-item popular">
    <div className="row g-0">
        <div className="col-lg-5">
            <figure>
                <small>{city}</small>
                <a href="hotel-detail.html">
                    <img src={hotel_thumbnail} className="img-fluid" alt="" width="800" height="533" />
                    <Link to='/hotel-details'>
                      <div className="read_more"><span>Read more</span>
                      </div>
                    </Link>
                </a>
            </figure>
        </div>
        <div className="col-lg-7">
            <div className="wrapper">
                <div className="cat_star">
                  <RatingStars rating={hotel.rate}/>
                </div>
                <h3><a href="hotel-detail.html">{hotel.hotel_name}</a></h3>
                <p>{hotel.hotel_address}</p>
                <span className="price">From <strong>${hotel_price}</strong> /per person</span>
            </div>
            <ul>
                <li><i className="ti-eye"></i> TBD views</li>
                <li>
                    <div className="score">
                        <span>TDB review(s)</span><strong>{hotel.rate}</strong>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Hotel