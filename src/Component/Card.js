import React from "react"
import star from '../Asset/Star 1.svg';

function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
      badgeText = "ONLINE"
    } else {
      badgeText = ""
    }
  
    return (
      <div className="card">
        {badgeText && <p className="card-badge">{badgeText}</p>}
        <img
          src={require(`../Asset/${props.card.coverImg}`)}
          alt=""
          className="card-image"
        />
        <div className="card-text">
          <p>
            <img src={star} alt="" className="star-icon" />
            {props.card.stats.rating + " "}
            <span className="text-gray">
              ({props.card.stats.reviewCount}) • {props.card.location}
            </span>
          </p>
          <p className="card-title">{props.card.title}</p>
          <p>
            <span className="font-bold card-price">
              From ${props.card.price}{" "}
            </span>
            / person
          </p>
        </div>
      </div>
    )
  }
  
  export default Card





{/*import React from 'react';
import img from '../Asset/image 12.png';
import img1 from '../Asset/Star 1.svg';


export default function Card (props) {
    return (
        <div className='card'>
             <img src={img} className='card__image' alt="" />
             <div className='card__stats'>
                <img src={img1} className='card__star' alt="" />
                <span>{props.rating}</span>
                <span className='grey'>({props.reviewCount}) .</span>
                <span className='grey'>{props.country}</span>
             </div>
             <p>{props.title}</p>
             <p><span className='bold'>{props.price}</span>/Person</p>
        </div>
    )
}*/}