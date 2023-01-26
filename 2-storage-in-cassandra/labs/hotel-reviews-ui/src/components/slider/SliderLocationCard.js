import React from "react"

const SliderLocationCard = ({ location }) => {

    const liStyle = {
        width: "280px",
        marginRight: "25px",
        float: "left",
        display: "block"
    };

    return (
        <li style={liStyle} >
            <img src={'img/home/' + location.city + '.jpeg'} alt="" />
            <div className="caption">
              <h3>{location.city} <span>{location.country}</span></h3>
              <small>{location.location_count} hotel(s)</small>
            </div>
        </li>
    )
}

export default SliderLocationCard