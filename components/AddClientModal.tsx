import FormInput from "./forms/FormInput"

const AddClienteModal = ({setShowClientModal, handleSubmit}) => {
  return (
    <div className="w-full fixed inset-0 bg-black/50">
        {/* Modal content goes here */}
        <div className="max-w-lg mx-auto mt-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Agregar Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput type="text"  name="name" description="Nombre del cliente" placeholder="Nombre del cliente"/>
                    <FormInput type="text"  name="contact" description="Persona de contacto" placeholder="Contacto"/>
                    <FormInput type="text"  name="beneficiary" description="Nombre del beneficiario" placeholder="Nombre del beneficiario"/>
                    <FormInput type="text"  name="property" description="Propiedad" placeholder="Nombre de la propiedad"/>
                    

                    <div className="flex gap-2">
                        <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Agregar Cliente
                        </button>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600"
                     onClick={() => setShowClientModal(false)}>
                        Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddClienteModal