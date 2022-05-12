const cartItems = new Map();

//Add cartItems method
export const saveCartItem = ({itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate}) =>{
    const cartItem = {itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate};
    cartItems.set(cartItem.itemID,cartItem);
    return cartItem;
};

//view cartItems method
export const getAllCartItems = () =>{
    return [...cartItems.values()];
};
