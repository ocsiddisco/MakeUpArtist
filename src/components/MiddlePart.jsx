import React from 'react';

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

