import axios from "axios";


async function getLocationsByProvince(provinceId){
    const params = {
        provinceId: provinceId,
    };
    const res = await axios.get('http://localhost:4000/locations',{
        params: params,
    });
    return res.data
}



export const locationService = {
    getLocationsByProvince
}

