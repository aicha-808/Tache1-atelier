import React from 'react';

export const Footer = (props) => {
    return ( 
        <footer className="p-4 text-center">
            <p className="fs-5 ">{props.nom} </p>
            <p className="fs-5 ">{props.desc}</p>
            <div className='mx-auto w-25'>
            <input type="email"  placeholder="ajouter votre mail" className='form-control' />   
            </div>         
        </footer>
     );
}
 
// export default Footer;