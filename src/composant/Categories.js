import React from 'react';

const Categories = ({categorie}) => {
  
    return ( 
        <div className="w-25 mx-auto d-flex mt-2">
            <select className="form-select">
                {categorie &&
                    categorie.map((catg) => 
                    <option  value={catg.value}>
                        {catg.nomCatg}
                    </option> )
                }
            </select>
            <input type="text" className="form-control ms-2" placeholder="categorie" />
        </div>
     );
}
 
export default Categories;