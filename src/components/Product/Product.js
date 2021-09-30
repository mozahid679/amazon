import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name } = this.props.Product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small> by : {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stoke - Order soon </small></p>
                <button className="main-button">add to cart</button>
            </div>
            <h3>this is product</h3>
        </div>
    );
};

export default Product;