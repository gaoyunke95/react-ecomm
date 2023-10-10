import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";


const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);



    return (
        <div className="cart-dropdown-container">
            { cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)}
            <Button>GO TO CHECK OUT</Button>
        </div>
    );
}

export default CartDropDown;
