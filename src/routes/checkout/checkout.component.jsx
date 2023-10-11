import "./checkout.styles.scss";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const CheckOut = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div>
            {
                cartItems.map((cartItem) => <CheckOutItem checkOutItem={cartItem}/>)
            }
        </div>
        );

}

export default CheckOut;
