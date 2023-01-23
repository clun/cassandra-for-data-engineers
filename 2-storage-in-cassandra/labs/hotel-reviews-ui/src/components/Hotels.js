import { React, useEffect, useState } from "react"

const Hotels = () => {

    // Attributes
    const [hotels, setHotels] = useState(null)

    // Methods
    const fetchHotels = async () => {
        const response = await fetch("https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city/rows?pageSize=20", {
              method: 'GET',
              headers: {
                "Content-Type": "application/json",
                "x-cassandra-token": "AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b"
              }
            }
        )
        const responseBody = await response.json();
        setHotels(responseBody.data)
        console.log(responseBody.data.length)
    }

    useEffect(() => {
        fetchHotels();
    }, [])

    // Render
    return <h2>Hotels </h2>
    {hotels && (
        <div className="container">
            hotels
          {Object.values(hotels).map((hotel) => (
            <li> {hotel.country} {hotel.city} </li>
          ))}
        </div>
      )}

}

export default Hotels

