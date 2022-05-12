const promotions = new Map();

//Add promos method
export const savePromo = ({promoID,promoName,promoDesc,promoDate}) =>{
    const promo = {promoID,promoName,promoDesc,promoDate};
    promotions.set(promo.promoID,promo);
    return promo;
};

//get all promos methos
export const getAllPromos = () =>{
    return [...promotions.values()];
    
};
