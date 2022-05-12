const items = new Map();

//Add item method
export const save = ({itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate}) =>{
    const item = {itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate};
    items.set(item.itemID,item);
    return item;
};

//get specific item method
export const get = (id) =>{
    const item = items.get(id);
    if(!item){
        throw new Error(`Not found for the ID ${id}`);
    }
    return item;
};

//get all items methos
export const getAll = () =>{
    return [...items.values()];
};

//update item method
export const update = (id,{itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate}) =>{
    if(!items.has(id)){
        throw new Error(`Not found for the ID ${id}`);
    }
    const item = {itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate};
    items.set(item.itemID,item);
    return item;
};

//delete item method
export const deleteItem= (id) =>{
    if(!items.has(id)){
        throw new Error(`Not found for the ID ${id}`);
    }
    items.delete(id);
};
