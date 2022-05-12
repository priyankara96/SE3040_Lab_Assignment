const customers = new Map();

//Add customer method
export const saveCustomer = ({customerName,customerNIC,customerEmail,userName,password}) =>{
    const customer = {customerName,customerNIC,customerEmail,userName,password};
    customers.set(customer.customerNIC,customer);
    return customer;
};

//get specific customer method
export const getCustomer = (id) =>{
    const customer = customers.get(id);
    if(!customer){
        throw new Error(`Not found for the ID ${id}`);
    }
    return customer;
};

//get all customers method
export const getAllCustomers = () =>{
    return [...customers.values()];
};
