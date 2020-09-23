export const initialState = {
    cart: [],
    user: 'speed',
};

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
     console.log(action);
    switch(action.type){
        case 'SET_USER':
        // Update the user when the user is logged in or out...
        return {
            ...state,
            user:action.user
        }
        case 'ADD_TO_CART':
            // Logic for adding item to Cart
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
            case 'REMOVE_FROM_CART':
                // Logic for removing item for Cart

                // cloned the cart
                let newCart = [...state.cart];

                const index = state.cart.findIndex(cartItem => cartItem.id === action.id);
                
                    console.log(index);

                if(index >=0 ){
                // Item exists in cart, remove it...
                newCart.splice(index,1);
                } else {
                console.warn(`Cant remove product (id: ${action}) as its not in the Cart`); 
                }
                return { 
                    ...state,
                 cart: newCart,
                }; 
            default:
                return state;
    }
}

export default reducer;
