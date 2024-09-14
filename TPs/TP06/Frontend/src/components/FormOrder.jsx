import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from "notistack";
import { provinceService } from "../services/provinces.service";
import { locationService } from "../services/locations.service";

export default function FormOrder() {
    const { enqueueSnackbar } = useSnackbar();
    const [startDate, setStartDate] = useState(new Date());

    const [provinces, setProvinces] = useState([])


    const [selectedProvinceCatchId, setSelectedProvinceCatchId] = useState(null);
    const [locationsCatch, setLocationsCatch] = useState([]);

    
    const [selectedProvinceDeliverId, setSelectedProvinceDeliverId] = useState(null);
    const [locationsDeliver, setLocationsDeliver] = useState([]);



    const handleChange = (date) => {
        setStartDate(date);
    };

    const Data = async () => {
        try {
            const data = await provinceService.getAll();
            setProvinces(data);
            console.log(data)
        } catch (error) {
            enqueueSnackbar("Error al obtener las provincias", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                autoHideDuration: 2000,
            });
        }
    }

    const handleProvinceCatch = async (e) => {
        const selectedId = e.target.value;
        setSelectedProvinceCatchId(selectedId); 

        try {
            const data = await locationService.getLocationsByProvince(selectedId);
            setLocationsCatch(data); 
        } catch (error) {
            enqueueSnackbar("Error al obtener las localidades de retiro", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                autoHideDuration: 2000,
            });
        }
    };

    const handleProvinceDeliver = async (e) => {
        const selectedId = e.target.value;
        setSelectedProvinceDeliverId(selectedId); 

        try {
            const data = await locationService.getLocationsByProvince(selectedId);
            setLocationsDeliver(data); 
        } catch (error) {
            enqueueSnackbar("Error al obtener las localidades de entrega", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                autoHideDuration: 2000,
            });
        }
    };


    useEffect(() => {
        Data();
    }, [])

    return (
        <>
            <form className="max-w-sm mx-auto">
                <div className="mt-5">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">
                        Tipo de carga
                    </label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Documentación</option>
                        <option>Paquete</option>
                        <option>Granos</option>
                        <option>Hacienda</option>
                    </select>
                </div>

                <div className="mt-5">
                    <label htmlFor="date-picker" className="block mb-2 text-sm font-medium text-gray-900">
                        Fecha de retiro
                    </label>
                    <DatePicker
                        id="date-picker"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        selected={startDate}
                        onChange={handleChange}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="date-picker" className="block mb-2 text-sm font-medium text-gray-900">
                        Fecha de entrega
                    </label>
                    <DatePicker
                        id="date-picker"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        selected={startDate}
                        onChange={handleChange}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Retiro</h2>
                    <hr className="border-1 border-gray-700 mt-2" />

                    <div className="mt-5">
                        <label htmlFor="provincesCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Provincia
                        </label>
                        <select
                            id="provincesCatch"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={handleProvinceCatch}
                        >
                            <option value="">Seleccione una provincia</option>
                            {provinces.length > 0 ? (
                                provinces.map((province) => (
                                    <option key={province.id} value={province.id}>
                                        {province.name}
                                    </option>
                                ))
                            ) : (
                                <option>Cargando provincias...</option>
                            )}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="localitiesCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select
                            id="localitiesCatch"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!selectedProvinceCatchId}
                        >
                            <option value="">Seleccione una localidad</option>
                            {locationsCatch.length > 0 && locationsCatch.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Calle
                        </label>
                        <input
                            type="calle"
                            id="calle"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Calle"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Número
                        </label>
                        <input
                            type="numero"
                            id="numero"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Número"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="referencia" className="block mb-2 text-sm font-medium text-gray-900">
                            Referencia adicional
                        </label>
                        <input
                            type="referencia"
                            id="referencia"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Referencia"
                        />
                    </div>

                </div>
                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Entrega </h2>
                    <hr className="border-1 border-gray-700 mt-2" />
                    <div className="mt-5">
                        <label htmlFor="provincesDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Provincia
                        </label>
                        <select
                            id="provincesDeliver"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={handleProvinceDeliver}
                        >
                            <option value="">Seleccione una provincia</option>
                            {provinces.length > 0 ? (
                                provinces.map((province) => (
                                    <option key={province.id} value={province.id}>
                                        {province.name}
                                    </option>
                                ))
                            ) : (
                                <option>Cargando provincias...</option>
                            )}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="localitiesDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select
                            id="localitiesDeliver"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!selectedProvinceDeliverId}
                        >
                            <option value="">Seleccione una localidad</option>
                            {locationsDeliver.length > 0 && locationsDeliver.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Calle
                        </label>
                        <input
                            type="calle"
                            id="calle"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Calle"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Número
                        </label>
                        <input
                            type="numero"
                            id="numero"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Número"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="referencia" className="block mb-2 text-sm font-medium text-gray-900">
                            Referencia adicional
                        </label>
                        <input
                            type="referencia"
                            id="referencia"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Referencia"
                        />
                    </div>

                </div>

                <div>
                    <h2 className="mt-4 text-gray-900">Imágenes </h2>
                    <hr className="border-1 border-gray-700 mt-2" />
                </div>

            </form>

            <div className="flex justify-center mt-5">
                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Publicar envío de pedido
                </button>
            </div>
        </>
    )
}