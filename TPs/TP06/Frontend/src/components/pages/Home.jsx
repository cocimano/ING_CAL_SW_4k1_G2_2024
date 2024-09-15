import DeliveredOrder from '../order/DeliveredOrder'
import PendingOrder from '../order/PendingOrder'
import Navbar from '../layout/Navbar'
import fotobotonenvio from '../../assets/botonenvio.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
    
    const navigate = useNavigate();
    const handleFormOrder = () => {navigate('/orderpage')}
    return (
        <>
            <div className="min-h-screen bg-gray-100 mb-[94px]">
                <div className='flex justify-center'>
                    <button
                        type="button"
                        className="bg-[#F7BE38] hover:bg-[#F7BE38]/90 hover:outline-offset-2 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-md inline-flex items-center mb-2 mt-5"
                        onClick={handleFormOrder}>

                        <img className="size-12" src={fotobotonenvio} alt="Icono botón envío" />
                        Publicar pedido de envío
                    </button>
                </div>
                <PendingOrder />
                <DeliveredOrder />
            </div>
            <Navbar />
        </>
    )
}