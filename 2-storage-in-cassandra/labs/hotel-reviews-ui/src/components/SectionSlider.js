import { React, useEffect, useState } from "react"
import axios from 'axios'
import SlideBig from "./SlideBig"
import SlideSmall from "./SlideSmall"

const SectionSlider = () => {

    // Store locations
    const [locations, setLocations] = useState(null)

    // Retrieve locations from table 'locations'
    const fetchLocations = async () => {
        const resLocations = await axios.get('/.netlify/functions/getLocations')
        setLocations(resLocations.data)
        console.log("Locations Loaded")
    }

    useEffect(() => {
        fetchLocations()
    }, [])

    return (
        <section className="slider">
            <div id="slider" className="flexslider">
                <ul className="slides">
                    {locations && locations.map((location, index) => <SlideBig key={index} location={location} />)}
                </ul>
            </div>
            <div id="carousel_slider_wp">
                <div id="carousel_slider" className="flexslider">
                  <div className="flex-viewport" style={{overflow: "hidden", position: "relative"}}>
                    <ul className="slides"  style={{width: "1000%",transitionDuration: "0s",transform: "translate3d(0px, 0px, 0px)"}} >
                        {locations && locations.map((location, index) => <SlideSmall key={index} location={location} />)}
                    </ul>
                  </div>
                    
                </div>
                
            </div>
        </section>
    )
}

export default SectionSlider;