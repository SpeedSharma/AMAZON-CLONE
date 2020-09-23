import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {

    const [{},dispatch] =  useStateValue();

    const addToCart = () => {
        // add item to Cart
        dispatch({
            type: 'ADD_TO_CART',
            item : {
                id: id,
                title : title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
            <p className='Product__name'>{title}</p>
            <small>Rs.</small>
            <strong>{price}</strong>
            <div className='product__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                    <p>	&#9733;</p> 
                ))}
            </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
