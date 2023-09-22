// import React from 'react';
import './SingleCard.css'

export default function SingleCard({card , handleChoice , flipped , disabled}){
    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }

    return(
        <div className='card' key={card.id}>
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} className='front' alt="card front" />
                <img src='img/cover.png' className='back' alt="card back" onClick={handleClick} />
            </div>
        </div>
    ) 
}