import { useState } from "react";

export default function OrderCard({ orders }) {
    const [openModal, setOpenModal] = useState(null);

    const handleOpenModal = (index) => {
        setOpenModal(index);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
    };

    return (
        <>
            {orders.map((order, index) => (
                <div key={index} className="m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-2 text-gray-700">
                        Tipo de Carga: {order.loadType}
                    </h2>

                    <p className="text-gray-700">
                        <strong>Retiro:</strong> {order.pickUpAddress.number}, {order.pickUpAddress.location.name}, {order.pickUpAddress.location.province.name}
                        {order.pickUpAddress.reference && ` - Ref: ${order.pickUpAddress.reference}`}
                    </p>

                    <p className="text-gray-700">
                        <strong>Fecha de Retiro:</strong> {new Date(order.pickUpDate).toLocaleDateString()}
                    </p>

                    <p className="text-gray-700">
                        <strong>Entrega:</strong> {order.deliveryAddress.number}, {order.deliveryAddress.location.name}, {order.deliveryAddress.location.province.name}
                        {order.deliveryAddress.reference && ` - Ref: ${order.deliveryAddress.reference}`}
                    </p>

                    <p className="text-gray-700">
                        <strong>Fecha de Entrega:</strong> {new Date(order.deliveryDate).toLocaleDateString()}
                    </p>

                    <button
                        onClick={() => handleOpenModal(index)}
                        className="mt-2 px-4 py-2 text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white rounded w-auto"
                    >
                        Ver imágenes
                    </button>

                    {openModal === index && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
                                <h3 className="text-lg font-semibold mb-4 text-center">Imágenes de la Orden</h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                                    {order.shippingOrderImages.length > 0 ? (
                                        order.shippingOrderImages.map((image, imgIndex) => (
                                            <img
                                                key={imgIndex}
                                                src={image.url}  
                                                alt={`Orden ${index} Imagen ${imgIndex}`}
                                                className="w-10 h-auto rounded-lg mx-auto"
                                            />
                                        ))
                                    ) : (
                                        <p className="text-center">No hay imágenes disponibles.</p>
                                    )}
                                </div>

                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={handleCloseModal}
                                        className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
