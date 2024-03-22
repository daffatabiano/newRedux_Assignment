import cartItems from "../cartItems";

const initialState = {
    //maping cartItems untuk merubah price dari string manjadi float
    cartItems: cartItems.map((item) => ({
        ...item,
        price: parseFloat(item.price),
    })),
    amount: cartItems.reduce((total, item) => {
        return total + item.amount;
    }, 0),
    total: cartItems.reduce((total, item) => {
        return total + item.price * item.amount;
    }, 0),
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart/addToCart': {
            const newItems = state.cartItems.map((item) =>
                item.id === action.payload.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
            );
            return {
                ...state,
                cartItems: newItems,
            };
        }

        case 'cart/reduceCart': {
            const newItems = state.cartItems
                .map((item) => {
                    if (item.id === action.payload.id) {
                        if (item.amount === 1) return null;
                        return { ...item, amount: item.amount - 1 };
                    }
                    return item;
                })
                .filter((item) => item !== null);
            return {
                ...state,
                cartItems: newItems,
            };
        }

        case 'cart/removeItem': {
            const newItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                cartItems: newItems,
            };
        }

        case 'cart/clearCart':
            return {
                ...state,
                cartItems: [],
            };

        case 'cart/calculateTotals':
            return {
                ...state,
                amount: state.cartItems.reduce((total, item) => {
                    return total + item.amount;
                }, 0),
                total: state.cartItems.reduce((total, item) => {
                    return total + item.amount * item.price;
                }, 0),
            };

        default:
            return state;
    }
};

export const addToCart = (id) => {
    return (dispatch) => {
        dispatch({ type: 'cart/addToCart', payload: id });
        dispatch({ type: 'cart/calculateTotals' });
    };
};

export const reduceCart = (id) => {
    return (dispatch) => {
        dispatch({ type: 'cart/reduceCart', payload: id });
        dispatch({ type: 'cart/calculateTotals' });
    };
};

export const removeItem = (id) => {
    return (dispatch) => {
        dispatch({ type: 'cart/removeItem', payload: id });
        dispatch({ type: 'cart/calculateTotals' });
    };
};

export const clearCart = () => {
    return (dispatch) => {
        dispatch({ type: 'cart/clearCart' });
        dispatch({ type: 'cart/calculateTotals' });
    };
};

export default cartReducer;
