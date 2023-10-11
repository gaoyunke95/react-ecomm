import Button from "../button/button.component";

const CheckOutItem = ({checkOutItem}) => {
    const {imageUrl, name, quantity, price} = checkOutItem;
    return (
        <div className="checkout-item-container">
            <img src={imageUrl}/>
            <span> {name}</span>
            <span> {quantity}</span>
            <span> {price} </span>
            <Button> Remove</Button>
        </div>
    )
}

export default CheckOutItem;
