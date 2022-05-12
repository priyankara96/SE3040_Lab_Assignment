import {randomUUID} from 'crypto';
const payments = new Map();

//Add purchase method
export const save = ({holderName,cardNum,expDate,cvv}) =>{
    const pay = {id:randomUUID(),holderName,cardNum,expDate,cvv};
    payments.set(pay.id,pay);
    return pay;
};


