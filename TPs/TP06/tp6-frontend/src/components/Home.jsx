import DeliveredOrder from './DeliveredOrder'
import PendingOrder from './PendingOrder'
import Navbar from './Navbar'
import fotobotonenvio from '../assets/botonenvio.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handleFormOrder = () => {
        navigate('/publicacionenvio');

    }
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div className='flex justify-center'>
                    <button
                        type="button"
                        className="hover:outline-offset-2 text-gray-00 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 mt-5"
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