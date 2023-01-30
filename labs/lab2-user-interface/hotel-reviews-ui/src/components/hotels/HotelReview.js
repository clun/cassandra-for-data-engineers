import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RatingStars from "../ui/RatingStars"

/**
 * Render one hotel in the hotel list.
 */
const HotelReview = ({ review }) => {

    return (
        <h1>Review {review.review_uid}</h1>
    )
}

export default HotelReview
 