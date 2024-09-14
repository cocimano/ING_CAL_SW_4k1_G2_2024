import React from 'react';

export default function OrderCard({ order }) {
    return (
        <div className="flex justify-center">
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                {/* Título de la Card */}
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Número de Pedido</h5>
                
                {/* Detalles de la Orden */}
                <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-400">Tipo de Carga: {order.tipoCarga}</h2>
                
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>Retiro:</strong> {order.domicilioRetiro.calleNumero}, {order.domicilioRetiro.localidad}, {order.domicilioRetiro.provincia}
                    {order.domicilioRetiro.referencia && ` - Ref: ${order.domicilioRetiro.referencia}`}
                </p>
                
                <p className="text-gray-700 dark:text-gray-400"><strong>Fecha de Retiro:</strong> {new Date(order.fechaRetiro).toLocaleDateString()}</p>
                
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>Entrega:</strong> {order.domicilioEntrega.calleNumero}, {order.domicilioEntrega.localidad}, {order.domicilioEntrega.provincia}
                    {order.domicilioEntrega.referencia && ` - Ref: ${order.domicilioEntrega.referencia}`}
                </p>
                
                <p className="text-gray-700 dark:text-gray-400"><strong>Fecha de Entrega:</strong> {new Date(order.fechaEntrega).toLocaleDateString()}</p>
            </a>
        </div>
    );
}

/* 
*/
