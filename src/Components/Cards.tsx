import React from 'react';
import './Cards.scss'
const Cards = ({className,
    children}) => {

    return (
        <div className={`cards${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    )
}
export default Cards;