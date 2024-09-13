export default function FormOrder() {
    return (
        <>
            <form className="max-w-sm mx-auto">
                <div className="mt-5">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de carga</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Documentación</option>
                        <option>Paquete</option>
                        <option>Granos</option>
                        <option>Hacienda</option>
                    </select>
                </div>


                <div className="mt-5">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de retiro</label>


                </div>
                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Retiro</h2>
                    <hr class="border-1 border-gray-700 mt-2" />
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincia</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option>Córdoba</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Localidad</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>San Francisco</option>
                            <option>Jesus María</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calle</label>
                        <input
                            type="calle"
                            id="calle"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Calle"
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
                        <input
                            type="numero"
                            id="numero"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Número"
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="referencia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referencia adicional</label>
                        <input
                            type="referencia"
                            id="referencia"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Referencia"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="mt-4 text-gray-900">Domicilio de Entrega </h2>
                    <hr class="border-1 border-gray-700 mt-2" />
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincia</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option>Córdoba</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Localidad</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>San Francisco</option>
                            <option>Jesus María</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calle</label>
                        <input
                            type="calle"
                            id="calle"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Calle"
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
                        <input
                            type="numero"
                            id="numero"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Número"
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="referencia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referencia adicional</label>
                        <input
                            type="referencia"
                            id="referencia"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Referencia"
                        />
                    </div>
                </div>
            </form>

        </>
    )



}