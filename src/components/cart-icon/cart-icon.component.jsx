﻿import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss';
const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const handleClick = () => setIsCartOpen(!isCartOpen);
    return (
    <div className="cart-icon-container" onClick={handleClick}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>
            0
        </span>
    </div>);
}

export default CartIcon;