import { useDispatch } from 'react-redux';
import { setHide } from '../redux/ModalSlice';
import { clearCart } from '../redux/CartSlice';

const Modal = () => {
    const dispatch = useDispatch();

    const handleConfirm = () => {
        dispatch(clearCart());
        dispatch(setHide());
        alert('all items removed from cart');
    };

    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn confirm-btn"
                        onClick={handleConfirm}
                    >
                        confirm
                    </button>
                    <button
                        type="button"
                        className="btn clear-btn"
                        onClick={() => dispatch(setHide())}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;
