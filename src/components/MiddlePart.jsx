import React from 'react';
import middelpart from "../Images/middelpart.jpg";

function MiddlePart(props) {
    return (
        <div>
            <div className='p-20'>
                {props.children}
            </div>
        </div>
    )
}


export default MiddlePart;

// style={{ backgroundImage: `url(${middelpart})`, backgroundRepeat: "no-repeat", width: '100%' , height: '100%', backgroundSize: 'cover' }}