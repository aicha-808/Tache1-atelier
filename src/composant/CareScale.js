import React from 'react';

const CareScale = ({etoile}) => {
    return ( 
        <p className='mt-0'>
            <img src={etoile} className="img-fluid etoile" alt="etoile"/>
            <img src={etoile} className="img-fluid etoile" alt="etoile"/>
        </p>
     );
}
 
export default CareScale;