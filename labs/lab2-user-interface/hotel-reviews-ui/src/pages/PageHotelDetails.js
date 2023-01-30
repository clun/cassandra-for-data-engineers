import { React, useEffect, useState, useContext } from "react"
import axios from 'axios'

import HotelBanner from "../components/hotels/HotelBanner";
import HotelDescription from "../components/hotels/HotelDescription";
import HotelReview from "../components/hotels/HotelReview";
import HotelReviewsList from "../components/hotels/HotelReviewsList";

/**
 * Details for an Hotels
 */
const PageHotelDetails = () => {
  const [hotelReviews, setHotelReviews] = useState(null)

  const queryParameters = new URLSearchParams(window.location.search)
  const uid = queryParameters.get("uid")
  
  /**
    * Populating Hotel list from DB
   **/
  const fetchHotelsInformation = async () => {
    const reviews = await axios.get('/.netlify/functions/getHotelReviews?uid=' + uid);
    setHotelReviews(reviews.data)
  }

  /**
     * Load Hotel list on initialization and update of the context.
     */
  useEffect(() => {
    fetchHotelsInformation()
  }, [])

  return (
    <>
      <HotelBanner uid={uid} />

      <div className="bg_color_1">
        <nav className="secondary_nav sticky_horizontal">
          <div className="container">
            <ul className="clearfix">
              <li><a href="#description" class="active">Description</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>
          </div>
        </nav>

        <div class="container margin_60_35">
				<div class="row">
					<div class="col-lg-8">
            <HotelDescription />
            <HotelReviewsList />
          </div>
          </div>
          </div>

        {hotelReviews && hotelReviews.map((review, index) => <HotelReview key={index} review={review} />)}
      </div>
      </>
  ) 
};

export default PageHotelDetails;
