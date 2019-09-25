import React, { useState } from 'react';
import Products from './Products';
import './products.scss';

const Shop = () => {

    const [products] = useState([

        { img: "./img/p1.webp", title: "Ristede Hampfrø", price: "21,95 kr", id: 1 },
        { img: "./img/p2.webp", title: "Hampeolie", price: "55,00 kr", id: 2 },
        { img: "./img/p3.webp", title: "Øko Afskallede hampefrø", price: "59,95 kr", id: 3 },
        { img: "./img/p4.webp", title: "Øko Granola - bær", price: "35,00 kr", id: 4 },
        { img: "./img/p5.webp", title: "Knækbrødsblanding", price: "19,95 kr", id: 5 },
        { img: "./img/p6.webp", title: "Øko Granola - kakao", price: "35,00 kr", id: 6 },
        { img: "./img/p7.webp", title: "Øko Hemp energy mix te", price: "59,95 kr", id: 7 },
        { img: "./img/p8.webp", title: "Spegepølse med Hamp - 3 stk.", price: "195,00 kr", id: 8 },
        { img: "./img/p9.webp", title: "Kornsblanding", price: "19,95 kr", id: 9 },
        { img: "./img/p10.webp", title: "Hverdagsmad", price: "249,00 kr", id: 10 }

    ]);





    return (
        <div className="wrapper">
            <div className="Shop-container">
                <h1>Møllerup Gods shop</h1>
                <Products allProductsProps={products} />


            </div>
        </div>
    )
}

export default Shop;
