import React from 'react';

const Card = (props) =>{
    return(
        <div className='tc bg-light-green br3 dib pa3 ma3 grow bw2 shadow-5'>
            <img alt='robo' src={props.pic.img} height='500' width='500'/>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.ability}</h3>
            </div>
        </div>
        
    );
}
export default Card;