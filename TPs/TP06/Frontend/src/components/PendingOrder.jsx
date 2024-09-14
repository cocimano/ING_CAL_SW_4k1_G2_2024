import React from 'react';
import OrderCard from './OrderCard'; // Ajusta la ruta según la ubicación real de tu archivo OrderCard

const sampleOrder = {
    tipoCarga: 'Grano',
    domicilioRetiro: {
        calleNumero: '123 Calle Principal',
        localidad: 'Ciudad',
        provincia: 'Provincia',
        referencia: 'Cerca del parque'
    },
    fechaRetiro: '2024-09-20T10:00:00Z',
    domicilioEntrega: {
        calleNumero: '456 Avenida Secundaria',
        localidad: 'Ciudad',
        provincia: 'Provincia',
        referencia: 'Al lado de la librería'
    },
    fechaEntrega: '2024-09-22T10:00:00Z',
    fotos: [
     
    ]
};

export default function PendingOrder() {
    return (
        <>
            <div className="mt-5">
                <h2 className="text-gray-700 text-2xl font-bold text-center mb-2">
                    PEDIDOS DE ENVIO PENDIENTES
                </h2>
                <hr className="border-1 border-gray-700" />
            </div>
            <div className="mt-5">
                {/* Renderiza la tarjeta de orden */}
                <OrderCard order={sampleOrder} />
            </div>
        </>
    );
}
