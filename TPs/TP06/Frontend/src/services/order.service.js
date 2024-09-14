import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';
let orders = []; 

async function getAllOrders() {

    const res = await axios.get(`${API_BASE_URL}/orders`);
    orders = res.data; 
    return orders;
}

export const orderService = {
    getAllOrders
}