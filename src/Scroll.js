import React from 'react';

const Scroll = (props) => {
    return( 
    <div style={{ overflowY: 'scroll',height: 'auto', border: '1px solid black'}}>
        {props.children};
    </div>
       
    );
};
export default Scroll;