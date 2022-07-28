import React from "react";
import data from "../data";

export default function Card(props) {
    return (
        <div className="card">          
            <img className="img" src={props.imageUrl} alt="" />
            <p className="location"><img src="../public/images/Fill 219.png" alt="" />{props.location}</p>
            <a href={props.googleMapsUrl} className="google-maps">View on Google Maps</a>
            <div>
                <h2 className="title">{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="content">
                    {props.description}
                </p>
            </div>
        </div>
    )
}