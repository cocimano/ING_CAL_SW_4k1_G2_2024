import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ImageUploader() {

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const handleVolver = () => {navigate(-1)}

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted, isDirty, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const id = window.location.hash.split("/").pop();
      const file = data.file[0];
      //const res = await hotelService.imageUpload(id, file);

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
      <div>
        <button type="button" 
            className="m-2 focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 
            onClick={handleVolver}
        >
            Volver
        </button>
      </div>

      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>

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