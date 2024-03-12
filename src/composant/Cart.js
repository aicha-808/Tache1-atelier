import React from 'react';
import Bouton from './Bouton';
import Li from './Li';

const Cart = ({titre, desc}) => {

    const listes = [
        {titre: "1 achat à 500 fcfa"},
        {titre: "1 achat à 800 fcfa"}
    ]

    return ( 
        <aside className="bg-success p-3 text-light side">
            <h4 className=" text-end">Panier</h4>
            <div className=" ">
                <h4 className=" ">{titre}</h4>
                <ul >
                 <Li listes={listes} />
                </ul>
                <p className="">{desc}</p>
                <Bouton nom='Ajout au panier' className='btn btn-light'/>
            </div>
        </aside>
     );
}
 
export  {Cart};