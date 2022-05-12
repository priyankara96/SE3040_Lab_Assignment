const traders = new Map();

//Add trader method
export const saveTrader = ({traderName,traderNIC,traderEmail,userName,password}) =>{
    const trader = {traderName,traderNIC,traderEmail,userName,password};
    traders.set(trader.traderNIC,trader);
    return trader;
};

//get specific trader method
export const getTrader = (id) =>{
    const trader = traders.get(id);
    if(!trader){
        throw new Error(`Not found for the ID ${id}`);
    }
    return trader;
};

