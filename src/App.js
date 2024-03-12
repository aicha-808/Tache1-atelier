import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Banner from './composant/Banner';
import {Footer} from './composant/Footer';
import {Cart} from './composant/Cart';
import Categories from './composant/Categories';
import ShoppingList from './composant/ShoppingList';

function App() {
  const categorie = [
    {nomCatg: "Catégorie 1",  value: 1},
    {nomCatg: "Catégorie 2",  value: 1},
    {nomCatg: "Catégorie 3",  value: 1}
  ]
  return (
    <div className="container-fluid App">
      <div className="row">

        <Banner nomSite="La maison jungle" /> 

      </div>
      <div className="row ">
        <div className="col-sm-2 ">

          <Cart titre='Panier' desc='Total 1300 fcfa' />

        </div>
        <div className="col-sm-10 ">
        <Categories categorie={categorie} />
        <ShoppingList />
        </div>
        <Footer nom='Par les ppkfdfer' desc='Qdressse fefe' />
      </div>
    </div>
  );
}

export default App;
