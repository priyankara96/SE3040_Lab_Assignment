const wishListItems = new Map();

//Add wishListItem method
export const saveWishListItem = ({itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate,Qty}) =>{
    const wishListItem = {itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate,Qty};
    wishListItems.set(wishListItem.itemID,wishListItem);
    return wishListItem;
};

//view wishListItem method
export const getAllWishListItems = () =>{
    return [...wishListItems.values()];
};
