import React from 'react';
import Cards from './Cards';


function CardsList(props) {
    return (
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {props.images.map((i) => {
                return (
                    <Cards image={i} />
                )
            })}
        </div>
    )
}


export default CardsList;