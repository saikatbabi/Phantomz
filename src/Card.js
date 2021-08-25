import React from 'react';
import './card.css';

const Card = (props) =>{
    return(
        <div className='tc bg-light-green br3 dib pa3 ma3 grow bw2 shadow-5 '>
            <img src={props.pic} alt='image' height='200px' width='200px'>

            </img>
           
            <div>
                <h2>{props.name}</h2>
                <h3>{props.ability}</h3>
                <p style={{textallign:'justify'}} >{props.about}</p>
            </div>
        </div>
        
    );
}
export default Card;