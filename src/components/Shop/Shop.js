import React from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    return (
        <div className="shop-container">

            <div className="product-container">
            {
               products.map(pd => <Product product = {pd}></Product>)
            }
            </div>
            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;