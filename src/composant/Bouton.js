import React from 'react';

const Bouton = ({nom, className}) => {
    return ( 
        <button className={className}>
           {nom}
        </button>
     );
}
 
export default Bouton;