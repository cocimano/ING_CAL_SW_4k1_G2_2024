import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

export default function FormOrder() {

    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (date) => {
        setStartDate(date);
    };

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
                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Retiro</h2>
                    <hr className="border-1 border-gray-700 mt-2" />
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">
                            Provincia
                        </label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Córdoba</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>San Francisco</option>
                            <option>Jesus María</option>
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
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">
                            Provincia
                        </label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Córdoba</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">
                            Localidad
                        </label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>San Francisco</option>
                            <option>Jesus María</option>
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