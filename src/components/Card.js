import React from "react"
import pinIcon from "../images/pin.svg"

function Card(props) {
    let imagePath = props.imageUrl
    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl} alt={props.alt} />
            <div className="card--info">
                <div className="card--location">
                    <img src={pinIcon} />
                    <p className="card--country">{props.location}</p>
                    <a href={props.googleMapsUrl} className="card--gm">View on Google Maps</a>
                </div>
                <h1 className="card--name">{props.title}</h1>
                <h6 className="card--date">{`${props.startDate} - ${props.endDate}`}</h6>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card