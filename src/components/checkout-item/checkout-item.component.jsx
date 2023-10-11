import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CheckOutItem = ({checkOutItem}) => {
    const {addItemToCart, removeItemFromCart, removeAllSingleCartItem} = useContext(CartContext);
    const {imageUrl, name, quantity, price} = checkOutItem;

    const addProductToCart = () => {addItemToCart(checkOutItem)};
    const removeProductFromCart = () => {removeItemFromCart(checkOutItem)};

    const removeAllSingleProductFromCart = () => {removeAllSingleCartItem(checkOutItem)};

    return (
        <div className="checkout-item-container">
            <img className="image-container" src={imageUrl} alt={`${name}`}/>
            <span className="name"> {name}</span>
            <span className="quantity">
                <button className="arrow" onClick={addProductToCart}> + </button>
                <span className="value"> {quantity}</span>
                <button className="arrow" onClick={removeProductFromCart}> - </button>

            </span>
            <span className="price"> {price} </span>
            <Button className="remove-button" onClick={removeAllSingleProductFromCart}> Remove</Button>
        </div>
    )
}

export default CheckOutItem;
