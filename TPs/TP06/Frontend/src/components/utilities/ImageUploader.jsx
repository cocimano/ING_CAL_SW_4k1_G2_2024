import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { orderService } from "../../services/orders.service";
import Swal from "sweetalert2";

export default function ImageUploader() {

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted, isDirty, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data, isNavigate = true) => {
    try {
      const id = window.location.pathname.split("/").pop();
      const file = data.file[0];
      const res = await orderService.imageUpload(id, file);
      if (isNavigate) {
        navigate('/');
        setTimeout(() => {
          Swal.fire({
              title: 'Pedido publicado correctamente. Se notificó a los transportistas de la zona.',
              customClass: {
                  container: 'bg-gray-100',
                  title: 'text-gray-700',
                  confirmButton: 'bg-[#F7BE38] hover:bg-[#F7BE38]/90 text-gray-700 hover:outline-offset-2 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-md inline-flex items-center mb-2 mt-5'
              }
          });
        }, 300);
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleAddAnotherImage = async () => {
    try {
      await handleSubmit((data) => onSubmit(data, false))();
      reset();
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
<>
      <div className="mt-5">
        <h2 className="text-gray-700 text-2xl font-bold text-center mb-2">
            ¿DESEA AGREGAR IMÁGENES A SU PEDIDO?
        </h2>
        <hr className="border-1 border-gray-700" />
      </div>

      <form className="m-4 " onSubmit={handleSubmit(onSubmit)}>
        <p className="font-medium mb-2">
          Imágenes (opcional)
        </p>

        <div>
          <label className="flex flex-col items-center justify-center w-full h-40 mb-4 border-2 border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Image Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Haz click aquí</span> para seleccionar una foto
                </p>
                <p className="text-xs text-gray-500 mb-3">SVG, PNG, JPG, JPEG</p>
              </div>
            )}
          </label>

          <input
            id="dropzone-file"
            type="file"
            name="file"
            className="bg-gray-100 font-medium text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 w-full border-2 border-gray-300 border-dashed hover:border-gray-400 focus:border-blue-300 hover:bg-gray-200 mb-2"
            {...register('file', { required: { value: true, message: 'Debes seleccionar una foto' } })}
            onChange={handleImageChange}
          />
          {errors.file && touchedFields.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
        </div>

        <button
          className="text-green-600 mb-2 hover:text-green-800 font-medium text-md rounded-md text-center whitespace-nowrap w-full"
          onClick={(e) => {
            e.preventDefault();
            handleAddAnotherImage();
          }}
        >
          + Agregar otra imagen
        </button>
        <button
          type="submit"
          className="mb-2 flex-1 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center whitespace-nowrap"
        >
          {isSubmitting ? 'CARGANDO...' : 'SIGUIENTE'}
        </button>

        {isDirty && isSubmitted && !isValid && <p className="text-red-500 text-sm">Por favor, completa correctamente todos los campos.</p>}
      </form>
    </>
  )
}