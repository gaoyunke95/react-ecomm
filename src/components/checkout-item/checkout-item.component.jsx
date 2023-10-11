import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({checkOutItem}) => {
    const {addItemToCart, removeItemFromCart, removeAllSingleCartItem} = useContext(CartContext);
    const {imageUrl, name, quantity, price} = checkOutItem;

    const addProductToCart = () => {addItemToCart(checkOutItem)};
    const removeProductFromCart = () => {removeItemFromCart(checkOutItem)};

    const removeAllSingleProductFromCart = () => {removeAllSingleCartItem(checkOutItem)};

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name"> {name}</span>
            <span className="quantity">
                <div className='arrow' onClick={removeProductFromCart}>&#10094;</div>
                <span className="value"> {quantity}</span>
                <div className='arrow' onClick={addProductToCart}>&#10095;</div>
            </span>
            <span className="price"> {price} </span>
            <div className="remove-button" onClick={removeAllSingleProductFromCart}> &#10005; </div>
        </div>
    )
}

export default CheckOutItem;
