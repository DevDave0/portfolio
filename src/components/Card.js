import React from 'react';

const Card = (props) => {

    return(
        <div>
            <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
        </div>
    )

}

export default Card;