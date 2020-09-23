import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

function Checkout() {
    
    const [{ cart }] = useStateValue();
    
    return (
        <div className='checkout'>
         <div className='checkout__left'>
         <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg' alt='' />

{cart?.length === 0 ? (
    <div>
        <h2 className="checkout__title">Your Shopping Cart is Empty</h2>
        <p>Your have no items in your basket. To buy one or more items, click "Add to Cart" next to the item</p>
        </div>
) : (
    <div>
        <h2 className='checkout__title'>Your Shopping Cart</h2>

        {/* List out all of the Checkout Products */}
        {cart.map(item => (
             <CheckoutProduct 
             id = {item.id}
             title={item.title}
             image = {item.image}
             price ={item.price}
             rating = {item.rating}
              />
        ))}
    </div>
)}
         </div>
        {cart.length > 0 && (
             <div className='checkout__right'>
             <Subtotal />
         </div>
        )}
        </div>

    )
}
// react-currency-format
export default Checkout;
