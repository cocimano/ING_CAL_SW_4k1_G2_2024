
export default function DeliveredOrder() {
    return (
        <>
            <div className="mt-5">
                <h2 className=" text-gray-700 text-2xl font-bold text-center mb-2">
                    PEDIDOS DE ENVIO ENTREGADOS
                </h2>
                <hr className="border-1 border-gray-700" />

                {/* Cuando existan pedidos entregados sacar este mensaje (condición) */}
                <p className="text-gray-700 text-center mt-5 pb-5">
                    No hay pedidos de envío entregados actualmente
                </p>
            </div>
        </>
    )
}