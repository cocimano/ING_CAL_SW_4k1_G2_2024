import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from "notistack";
import Swal from "sweetalert2";
import { provinceService } from "../services/provinces.service";
import { locationService } from "../services/locations.service";

export default function FormOrder() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm();

    const [dateCatch, setDateCatch] = useState(new Date());
    const [dateDeliver, setDateDeliver] = useState(new Date());
    const [provinces, setProvinces] = useState([]);
    const [selectedProvinceCatchId, setSelectedProvinceCatchId] = useState(null);
    const [locationsCatch, setLocationsCatch] = useState([]);
    const [selectedProvinceDeliverId, setSelectedProvinceDeliverId] = useState(null);
    const [locationsDeliver, setLocationsDeliver] = useState([]);

    const handleChangeDateCatch = (date) => {
        setDateCatch(date);
        setValue("dateCatch", date);
    };
    const handleChangeDateDeliver = (date) => {
        setDateDeliver(date);
        setValue("dateDeliver", date);
    };

    const fetchProvinces = async () => {
        try {
            const data = await provinceService.getAll();
            setProvinces(data);
        } catch (error) {
            enqueueSnackbar("Error al obtener las provincias", { variant: "error" });
        }
    };

    const handleProvinceCatchChange = async (e) => {
        const selectedId = e.target.value;
        setSelectedProvinceCatchId(selectedId);
        setValue("provinceCatch", selectedId);

        try {
            const data = await locationService.getLocationsByProvince(selectedId);
            setLocationsCatch(data);
        } catch (error) {
            enqueueSnackbar("Error al obtener las localidades de retiro", { variant: "error" });
        }
    };

    const handleProvinceDeliverChange = async (e) => {
        const selectedId = e.target.value;
        setSelectedProvinceDeliverId(selectedId);
        setValue("provinceDeliver", selectedId);

        try {
            const data = await locationService.getLocationsByProvince(selectedId);
            setLocationsDeliver(data);
        } catch (error) {
            enqueueSnackbar("Error al obtener las localidades de entrega", { variant: "error" });
        }
    };

    useEffect(() => {
        fetchProvinces();
    }, []);

    const onSubmit = async (data) => {
        try {
            Swal.fire({
                title: "¿Confirmar envío?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#1b325f",
                cancelButtonColor: "#d33",
                confirmButtonText: "SÍ",
                cancelButtonText: "NO",
                reverseButtons: true,
                showLoaderOnConfirm: true,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(data);
                        // Add logic to handle form submission
                    } catch (error) {
                        console.error("Error al enviar el formulario", error);
                    }
                }
            });
        } catch (error) {
            console.error("Error al procesar el envío", error);
        }
    };

    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
                        Tipo de carga
                    </label>
                    <select id="type" {...register("type")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="documentacion">Documentación</option>
                        <option value="paquete">Paquete</option>
                        <option value="granos">Granos</option>
                        <option value="hacienda">Hacienda</option>
                    </select>
                </div>

                <div className="mt-5">
                    <label htmlFor="dateCatch" className="block mb-2 text-sm font-medium text-gray-900">
                        Fecha de retiro
                    </label>
                    <DatePicker
                        id="dateCatch"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        selected={dateCatch}
                        onChange={handleChangeDateCatch}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="dateDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                        Fecha de entrega
                    </label>
                    <DatePicker
                        id="dateDeliver"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        selected={dateDeliver}
                        onChange={handleChangeDateDeliver}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Retiro</h2>
                    <hr className="border-1 border-gray-700 mt-2" />

                    <div className="mt-5">
                        <label htmlFor="provinceCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Provincia
                        </label>
                        <select
                            id="provinceCatch"
                            {...register("provinceCatch")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={handleProvinceCatchChange}
                        >
                            <option value="">Seleccione una provincia</option>
                            {provinces.map((province) => (
                                <option key={province.id} value={province.id}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="localitiesCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select
                            id="localitiesCatch"
                            {...register("localitiesCatch")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!selectedProvinceCatchId}
                        >
                            <option value="">Seleccione una localidad</option>
                            {locationsCatch.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="streetCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Calle
                        </label>
                        <input
                            id="streetCatch"
                            {...register("streetCatch")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Calle"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="numberCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Número
                        </label>
                        <input
                            id="numberCatch"
                            {...register("numberCatch")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Número"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="referenceCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Referencia adicional
                        </label>
                        <input
                            id="referenceCatch"
                            {...register("referenceCatch")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Referencia"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Entrega</h2>
                    <hr className="border-1 border-gray-700 mt-2" />
                    <div className="mt-5">
                        <label htmlFor="provinceDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Provincia
                        </label>
                        <select
                            id="provinceDeliver"
                            {...register("provinceDeliver")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={handleProvinceDeliverChange}
                        >
                            <option value="">Seleccione una provincia</option>
                            {provinces.map((province) => (
                                <option key={province.id} value={province.id}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="localitiesDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select
                            id="localitiesDeliver"
                            {...register("localitiesDeliver")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!selectedProvinceDeliverId}
                        >
                            <option value="">Seleccione una localidad</option>
                            {locationsDeliver.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="streetDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Calle
                        </label>
                        <input
                            id="streetDeliver"
                            {...register("streetDeliver")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Calle"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="numberDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Número
                        </label>
                        <input
                            id="numberDeliver"
                            {...register("numberDeliver")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Número"
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="referenceDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Referencia adicional
                        </label>
                        <input
                            id="referenceDeliver"
                            {...register("referenceDeliver")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Referencia"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="mt-4 text-gray-900">Imágenes</h2>
                    <hr className="border-1 border-gray-700 mt-2" />
                    {/* ImageUpload */}
                </div>

                <div className="flex justify-center mt-5">
                    <button
                        type="submit"
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        {isSubmitting ? 'Cargando...' : 'Publicar envío de pedido'}
                    </button>
                </div>
            </form>
        </>
    );
}
