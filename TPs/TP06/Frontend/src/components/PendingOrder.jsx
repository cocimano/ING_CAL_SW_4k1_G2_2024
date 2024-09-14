import { useState, useEffect } from "react";
import OrderCard from './OrderCard';
import { useSnackbar } from "notistack";
import { orderService } from '../services/orders.service';

export default function PendingOrder() {
    const [pendingOrders, setPendingOrders] = useState([])

    const fetchPendingOrders = async () => {
        try { 
            const data = await orderService.getAll();
            setPendingOrders(data);

        } catch (error) {
            enqueueSnackbar("Error al obtener los pedidos de envío", { variant: "error" });

        }
    }

    useEffect(() => {
        fetchPendingOrders();
    }, []);



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
                <OrderCard orders={pendingOrders} />
            </div>
        </>
    );
}
