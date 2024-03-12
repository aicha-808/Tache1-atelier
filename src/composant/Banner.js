import React from 'react';
import log from '../img/log.png';

const Banner = ({nomSite}) => {
    return ( 
        <nav className="bg-warning px-3 py-2 ">
            <h1 className="fs-5 text-end"><img className="img-fluid logo" src={log} alt="logo" />{nomSite}</h1>
        </nav>
     );
}
 
export default Banner;