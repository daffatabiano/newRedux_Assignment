import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import Modal from './Modal';
import { setShow } from '../redux/ModalSlice';

const CartContainer = () => {
    const { amount, total, cartItems } = useSelector((store) => store.cart);
    const isModalShow = useSelector((store) => store.showModal.isOpen);
    const dispatch = useDispatch();

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total{' '}
                        <span>
                            {total.toLocaleString('US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </span>
                    </h4>
                </div>
                <button
                    className="btn clear-btn"
                    onClick={() => dispatch(setShow())}
                >
                    clear cart
                </button>
            </footer>
            {isModalShow && <Modal />}
        </section>
    );
};
export default CartContainer;
