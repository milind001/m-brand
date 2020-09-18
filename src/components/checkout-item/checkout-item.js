import React from 'react';
import './checkout-item.scss';

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'  />
        </div>
        <span className='name'>{name}</span>
        <span className='price'>{quantity}</span>
        <span className='quantity'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;