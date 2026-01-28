'use client';

import { useActionState } from 'react';
import { createClient } from '@/app/actions/clientActions';
import Link from 'next/link';

import FormInput from './forms/FormInput';

const AddClienteModal = () => {
    const [state, action, isPending] = useActionState(createClient, null);

    return (
        <div className="fixed inset-0 w-full overflow-y-scroll bg-black/50">
            {/* Modal content goes here */}
            <div className="mx-auto mt-20 w-1/2 p-4">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-xl font-bold">Agregar Cliente</h2>
                    <form action={action} className="grid gap-4 md:grid-cols-2">
                        <FormInput
                            type="text"
                            name="name"
                            label="Nombre del cliente"
                            placeholder="Nombre del cliente"
                        />
                        <FormInput
                            type="text"
                            name="companyName"
                            label="Nombre de la empresa"
                            placeholder="Nombre de la empresa"
                        />

                        <FormInput
                            type="text"
                            name="identificationNumber"
                            label="Número de identificación"
                            placeholder="Número de identificación (NIT, cédula o pasaporte)"
                        />
                        <FormInput
                            type="email"
                            name="email"
                            label="Correo electrónico"
                            placeholder="Correo electrónico"
                        />

                        <FormInput
                            type="text"
                            name="phone"
                            label="Teléfono"
                            placeholder="Número de teléfono"
                        />
                        <FormInput
                            type="select"
                            name="type"
                            label="Tipo de cliente"
                            placeholder="Tipo de cliente"
                            options={['Inquilino', 'Copropietario']}
                        />
                        <FormInput
                            type="text"
                            name="contact"
                            label="Persona de contacto"
                            placeholder="Contacto"
                        />
                        <FormInput
                            type="text"
                            name="beneficiary"
                            label="Nombre del beneficiario"
                            placeholder="Nombre del beneficiario"
                        />
                        <FormInput
                            type="text"
                            name="properties"
                            label="Propiedad"
                            placeholder="Nombre de la propiedad"
                        />
                        <FormInput
                            type="textarea"
                            name="paymentInstructions"
                            label="Instrucciones de pago"
                            placeholder="Instrucciones de pago"
                        />

                        <div className="flex gap-2">
                            {/* Feedback visual */}
                            {state?.error && (
                                <p className="text-sm text-red-500">
                                    {state.error}
                                </p>
                            )}
                            {state?.success && (
                                <p className="text-sm text-green-500">
                                    {state.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                disabled={isPending}
                            >
                                {isPending ? 'Guardando...' : 'Crear Cliente'}
                            </button>
                            <Link
                                href="/clients"
                                className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-blue-600"
                            >
                                Cancelar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClienteModal;
