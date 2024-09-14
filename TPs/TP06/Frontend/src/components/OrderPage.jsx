import { useNavigate } from 'react-router-dom';
import FormOrder from './FormOrder'

export default function OrderPage() {
    const navigate = useNavigate();
    const handleVolver = () => {navigate(-1)}
    
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div>
                    <button type="button" 
                        className="m-2 focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
                        onClick={handleVolver}
                    >
                        Volver
                    </button>
                </div>
                <div className="mt-5">
                    <h2 className=" text-gray-700 text-2xl font-bold text-center mb-2">
                        PUBLICAR ENVÍO DE PEDIDO
                    </h2>
                    <hr className="border-1 border-gray-700" />
                </div>
                <div>
                    <FormOrder />
                </div>
            </div>
        </>
    )
}