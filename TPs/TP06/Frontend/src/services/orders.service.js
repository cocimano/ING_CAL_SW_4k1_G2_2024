import axios from 'axios';

async function getAll() {
    const res = await axios.get('http://localhost:4000/shipping-order');
    return res.data;
}

async function getOrdersPending() {

    const res = await axios.get('http://localhost:4000/shipping-order/pending');
    return res.data;
}

async function getOrdersDelivered() {

    const res = await axios.get('http://localhost:4000/shipping-order/delivered');
    return res.data;
}

async function getOrdersTaken() {

    const res = await axios.get('http://localhost:4000/shipping-order/taken');
    return res.data;
}

const register = async (
    loadType,
    streetPickUp,
    numberPickUp,
    referencePickUp,
    locationIdPickUp,
    pickUpDate,
    streetDelivery,
    numberDelivery,
    referenceDelivery,
    locationIdDelivery,
    deliveryDate,

) => {
    const res = await axios.post('http://localhost:4000/shipping-order', {
        loadType: loadType,
        pickUpAddress: {
            street: streetPickUp,
            number: numberPickUp,
            reference: referencePickUp,
            locationId: locationIdPickUp
        },
        pickUpDate: pickUpDate,
        deliveryAddress: {
            street: streetDelivery,
            number: numberDelivery,
            reference: referenceDelivery,
            locationId: locationIdDelivery,
        },
        deliveryDate: deliveryDate,
    }
    )
    return res;
}

const imageUpload = async (id, file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
        const res = await axios.post(`http://localhost:4000/shipping-order/images/${id}`, formData);
        return res;
    } catch (error) {
        console.error("Error al subir la imagen:", error);
        throw error;
    }
};

const imageDelete = async (id) => {
    await axios.delete(`http://localhost:4000/shipping-order/images/${id}`);
};

export const orderService = {
    getAll,
    getOrdersPending,
    getOrdersDelivered,
    getOrdersTaken,
    register,
    imageUpload,
    imageDelete,
}