import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from "notistack";
import Swal from "sweetalert2";
import { provinceService } from "../../services/provinces.service";
import { locationService } from "../../services/locations.service";
import { orderService } from "../../services/orders.service";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";


const OrderType = {
    DOCUMENTACION: 'DOCUMENTACION',
    PAQUETE: 'PAQUETE',
    GRANOS: 'GRANOS',
    HACIENDA: 'HACIENDA',
};

export default function FormOrder() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm();

    const [dateCatch, setDateCatch] = useState(new Date());
    const [dateDeliver, setDateDeliver] = useState(new Date());
    const [provinces, setProvinces] = useState([]);
    const [selectedProvinceCatchId, setSelectedProvinceCatchId] = useState(null);
    const [locationsCatch, setLocationsCatch] = useState([]);
    const [selectedLocationCatchId, setSelectedLocationCatchId] = useState(null);
    const [selectedProvinceDeliverId, setSelectedProvinceDeliverId] = useState(null);
    const [locationsDeliver, setLocationsDeliver] = useState([]);
    const [selectedLocationDeliverId, setSelectedLocationDeliverId] = useState(null);
    const navigate = useNavigate();

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
        setSelectedLocationCatchId(null);
        setValue("locationCatch", "");

        try {
            const data = await locationService.getLocationsByProvince(selectedId);
            setLocationsCatch(data);
        } catch (error) {
            enqueueSnackbar("Error al obtener las localidades de retiro", { variant: "error" });
        }
    };

    const handleLocationCatchChange = (e) => {
        const selectedId = e.target.value;
        setSelectedLocationCatchId(selectedId);
        setValue("locationCatch", selectedId);
    };

    const handleProvinceDeliverChange = async (e) => {
        const selectedId = e.target.value;
        setSelectedProvinceDeliverId(selectedId);
        setValue("provinceDeliver", selectedId);
        setSelectedLocationDeliverId(null);
        setValue("locationDeliver", "");

        try {
            const data = await locationService.getLocationsByProvince(selectedId);
            setLocationsDeliver(data);
        } catch (error) {
            enqueueSnackbar("Error al obtener las localidades de entrega", { variant: "error" });
        }
    };

    const handleLocationDeliverChange = (e) => {
        const selectedId = e.target.value;
        setSelectedLocationDeliverId(selectedId);
        setValue("locationDeliver", selectedId);
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
                        const formattedDateCatch = format(dateCatch, 'yyyy-MM-dd');
                        const formattedDateDeliver = format(dateDeliver, 'yyyy-MM-dd');
                        const type = OrderType[data.type];

                        const res = await orderService.register(
                            type,
                            data.streetCatch,
                            data.numberCatch,
                            data.referenceCatch,
                            selectedLocationCatchId,
                            formattedDateCatch,
                            data.streetDeliver,
                            data.numberDeliver,
                            data.referenceDeliver,
                            selectedLocationDeliverId,
                            formattedDateDeliver
                        );
                        console.log("Registrado correctamente:", res.data);
                        setTimeout(() => {
                            Swal.fire({
                                title: 'Pedido publicado correctamente. Se notificó a los transportistas de la zona.',
                                customClass: {
                                    container: 'bg-gray-100', 
                                    title: 'text-gray-700', 
                                    confirmButton: 'bg-[#F7BE38] hover:bg-[#F7BE38]/90 text-gray-700 hover:outline-offset-2 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-md inline-flex items-center mb-2 mt-5'
                                }
                            });
                            navigate(-1);
                        }, 500);

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
                    <select
                        id="type"
                        {...register("type")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        {Object.keys(OrderType).map((key) => (
                            <option key={key} value={key}>
                                {OrderType[key]}
                            </option>
                        ))}
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
                        minDate={new Date()}
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
                        minDate={dateCatch}
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
                        <label htmlFor="locationCatch" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select
                            id="locationCatch"
                            {...register("locationCatch")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!selectedProvinceCatchId}
                            onChange={handleLocationCatchChange}
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
                        <label htmlFor="locationDeliver" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select
                            id="locationDeliver"
                            {...register("locationDeliver")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            disabled={!selectedProvinceDeliverId}
                            onChange={handleLocationDeliverChange}
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
