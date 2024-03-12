import React from 'react';
import Bouton from './Bouton';
import CareScale from './CareScale';


const PlantItem = ({titre, imgPlant, etoile}) => {
    
    return (
        <div className="col-sm-4">
            <div className="card border-0">
                <div className="shadow-sm "><img src={imgPlant} class="card-img-top rounded-3 bg-secondary" alt="..." /> </div>
                <div className="card-body">
                    <h5 className="card-title">{titre}</h5>
                    <CareScale etoile={etoile} className="text-primary" />
                    <CareScale etoile={etoile} />
                    <Bouton nom='Ajouter' className='btn btn-success' />
                </div>
            </div>
        </div> 
     );
}
 
export default PlantItem;