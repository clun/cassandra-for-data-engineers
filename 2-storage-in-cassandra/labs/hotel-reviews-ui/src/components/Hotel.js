import { useEffect, useState } from "react"

const Hotel = ({ hotel }) => {
  const [reviews, setReviews] = useState(null)
  
  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getHotels", {
      method: "POST",
      body: JSON.stringify({ country: country, city: city }),
    })
    const responseBody = await response.json()
    setReviews(responseBody.data.movies_by_genre.values)
  }

  useEffect(() => { fetchData() }, [])

  return (
    <>
      <li id={hotel}>{hotel}</li>
    </>
  )
}

export default Hotel