const initialState = {
    isOpen: false,
};

const showModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'showModal/show':
            return {
                ...state,
                isOpen: true,
            };
        case 'showModal/hide':
            return {
                ...state,
                isOpen: false,
            };
        default:
            return state;
    }
};

export const setShow = () => {
    return {
        type: 'showModal/show',
    };
};

export const setHide = () => {
    return {
        type: 'showModal/hide',
    };
};

export default showModalReducer;
