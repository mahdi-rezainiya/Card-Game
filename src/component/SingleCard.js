// import React from 'react';
import './SingleCard.css'

export default function singleCard({card , handleChoice}) {

    const handleClick = () => {
        handleChoice(card)
    };

    return (
    <div className='card'>
        <div>
            <img className='front' src={card.src} alt="card front" />
            <img className='back' src='img/cover.png' onClick={handleClick} alt="card back" />
        </div>
    </div>
    )
}