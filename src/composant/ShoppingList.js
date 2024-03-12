import React from 'react';
import PlantItem from './PlantItem';
import plant1 from '../img/plant1.jpg';
import plant2 from '../img/plant2.jpg';
import plant3 from '../img/plant3.jpg';
import etoile from '../img/etoile.jpg';

const ShoppingList = () => {
    const liste = [
        {titre:'plant1', imgPlant: plant1},
        {titre:'plant2', imgPlant: plant2},
        {titre:'plant3', imgPlant: plant3}
    ]
    return ( 
        <div className=" mt-2 container">
            <div className="row mx-auto w-75">
            {liste && 
                liste.map((list, index)  => 
                <PlantItem key={index} titre={list.titre} 
                imgPlant={list.imgPlant} etoile={etoile} /> 
                )}
            </div>
        </div>
      
     );
}
 
export default ShoppingList;