import axios from 'axios';

const LoadType = {
    DOCUMENTACION: 'DOCUMENTACION',
    PAQUETE: 'PAQUETE',
    GRANOS: 'GRANOS',
    HACIENDA: 'HACIENDA'
};

async function getAll() {

    const res = await axios.get('http://localhost:4000/shipping-order');
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



export const orderService = {
    getAll,
    register,
}