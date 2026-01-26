"use client";

import { useActionState } from "react";
import { createClient } from "@/app/actions/clientActions";
import Link from "next/link";

import FormInput from "./forms/FormInput";


const AddClienteModal = () => {
    const [state, action, isPending] = useActionState(createClient, null);

  return (
    <div className="w-full fixed inset-0 bg-black/50">
        {/* Modal content goes here */}
        <div className="max-w-lg mx-auto mt-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Agregar Cliente</h2>
                <form action={action}>
                    <FormInput type="text"  name="name" label="Nombre del cliente" placeholder="Nombre del cliente"/>
                    <FormInput type="text"  name="type" label="Tipo de cliente" placeholder="Tipo de cliente"/>
                    <FormInput type="text"  name="contact" label="Persona de contacto" placeholder="Contacto"/>
                    <FormInput type="text"  name="beneficiary" label="Nombre del beneficiario" placeholder="Nombre del beneficiario"/>
                    <FormInput type="text"  name="properties" label="Propiedad" placeholder="Nombre de la propiedad"/>
                    <FormInput type="textarea"  name="paymentInstructions" label="Instrucciones de pago" placeholder="Instrucciones de pago"/>
                    

                    <div className="flex gap-2">
                        {/* Feedback visual */}
                        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
                        {state?.success && <p className="text-green-500 text-sm">{state.message}</p>}
                        <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        disabled={isPending}
                    >
                        {isPending ? 'Guardando...' : 'Crear Cliente'}
                        </button>
                        <Link  href="/clients" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600"
                        >
                        Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddClienteModal