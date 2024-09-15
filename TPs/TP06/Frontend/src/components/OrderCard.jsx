import React from 'react';

export default function OrderCard({ orders }) {
    return (
        <div>
            {orders.map((order, index) => (
                <div key={index} className="flex justify-center mt-2">
                    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-400">Tipo de Carga: {order.loadType}</h2>
                        
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <strong>Retiro:</strong> {order.pickUpAddress.number}, {order.pickUpAddress.location.name}, {order.pickUpAddress.location.province.name}
                            {order.pickUpAddress.reference && ` - Ref: ${order.pickUpAddress.reference}`}
                        </p>
                        
                        <p className="text-gray-700 dark:text-gray-400"><strong>Fecha de Retiro:</strong> {new Date(order.pickUpDate).toLocaleDateString()}</p>
                        
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <strong>Entrega:</strong> {order.deliveryAddress.number}, {order.deliveryAddress.location.name}, {order.deliveryAddress.location.province.name}
                            {order.deliveryAddress.reference && ` - Ref: ${order.deliveryAddress.reference}`}
                        </p>
                        
                        <p className="text-gray-700 dark:text-gray-400"><strong>Fecha de Entrega:</strong> {new Date(order.deliveryDate).toLocaleDateString()}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}
