export default function OrderCard({ orders }) {
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
                    
                    <p className="text-gray-700"><strong>
                        Fecha de Retiro:</strong> {new Date(order.pickUpDate).toLocaleDateString()}
                    </p>
                    
                    <p className="text-gray-700">
                        <strong>Entrega: </strong> 
                        {order.deliveryAddress.number}, {' '}
                        {order.deliveryAddress.location.name}, {' '}
                        {order.deliveryAddress.location.province.name}
                        {` - Ref: ${order.deliveryAddress.reference}`}
                    </p>
                    
                    <p className="text-gray-700">
                        <strong>Fecha de Entrega:</strong> {new Date(order.deliveryDate).toLocaleDateString()}
                    </p>
                   
                </div>
            ))}
        </>
    );
}
