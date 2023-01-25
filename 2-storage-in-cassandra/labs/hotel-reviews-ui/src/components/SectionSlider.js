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
        console.log(resLocations.data)
        setLocations(resLocations.data)
    }

    useEffect(() => {
        fetchLocations()
    }, [])
 
    return (
        <section className="slider">
            <div id="slider" className="flexslider">
                <ul className="slides">
                {locations.map((location, index) => <SlideBig key={index} location={location} />)}

                </ul>
                <div id="icon_drag_mobile"></div>
            </div>
            <div id="carousel_slider_wp">
                <div id="carousel_slider" className="flexslider">
                    <ul className="slides">
                    {locations.map((location, index) => <SlideSmall key={index} location={location} />)}
                       
                    </ul>
                </div>
                <ul className="flex-direction-nav">
                        <li className="flex-nav-prev">
                            <a className="flex-prev flex-disabled" href="#" tabindex="-1"></a>
                        </li>
                        <li className="flex-nav-next">
                            <a className="flex-next flex-disabled" href="#" tabindex="-1">
                            </a>
                        </li></ul>
            </div>
        </section>
    )
}

export default SectionSlider;