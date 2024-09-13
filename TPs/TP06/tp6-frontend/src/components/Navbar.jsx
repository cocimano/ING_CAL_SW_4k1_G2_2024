import fotoperfil from '../assets/fotoperfil-SuarezEmiliano.jpg'

export default function Navbar() {
    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-[#F7BE38]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Título que aparece solo en vista mobile */}
                    <div className='text-bold text-bg-500 p-4 rounded-lg'>
                        <span className="block text-xl font-bold text-gray-700 md:hidden">
                            Tango App
                        </span>
                    </div>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <img className="border-gray-500 border-2 size-12 rounded-full" src={fotoperfil} alt="user photo" />
                    </div>
                </div>
            </nav>
        </>
    )
}
