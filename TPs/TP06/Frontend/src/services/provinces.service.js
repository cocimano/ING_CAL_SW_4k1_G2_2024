import axios from "axios";


async function getAll(){
    const res = await axios.get('http://localhost:4000/provinces')
    return res.data
}



export const provinceService = {
    getAll
}

