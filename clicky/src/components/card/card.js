import React from "react";
import "./card.css"; 


const Card = ({handleClick, image, name, id}) => (
    <div className="card-container">
        <div className="card" id={id} onClick={ () => handleClick(id) }>
            <div className="img-container">
                <img className="img-responsive" alt={name} src={image} />
            </div>
        </div> 
    </div>
);

export default Card;