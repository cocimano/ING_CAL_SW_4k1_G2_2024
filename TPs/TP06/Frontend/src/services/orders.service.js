import axios from 'axios';

async function getAll() {

    const res = await axios.get('http://localhost:4000/shipping-order');
    return res.data;
}

export const orderService = {
    getAll
}