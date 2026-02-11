'use client';

import { useActionState, useEffect } from 'react';
import { createClient, updateClient } from '@/app/actions/clientActions';
import type { Client } from '@/types/client';

import FormInput from './forms/FormInput';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    client?: Client;
}

const ClientModal = ({ onClose, client }: Props) => {
    console.log('client data:', client);
    // Determinamos qué acción usar
    const actionWithId = client
        ? updateClient.bind(null, client._id)
        : createClient;
    const [state, action, isPending] = useActionState(actionWithId, null);

    // Cerrar modal automáticamente si la operación fue exitosa
    useEffect(() => {
        if (state?.success) {
            const timer = setTimeout(() => {
                onClose();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [state, onClose]);

    /* if (!isOpen) return null; */

    console.log('Rendering ClientModal with client:', client);

    return (
        <div className="fixed inset-0 w-full overflow-y-scroll bg-black/50">
            {/* Modal content goes here */}
            <div className="mx-auto mt-20 w-1/2 p-4">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-xl font-bold">
                        {client ? 'Editar Cliente' : 'Nuevo Cliente'}
                    </h2>
                    <form action={action} className="grid gap-4 md:grid-cols-2">
                        <FormInput
                            type="text"
                            name="name"
                            label="Nombre del cliente"
                            placeholder="Nombre del cliente"
                            defaultValue={client?.name}
                        />
                        <FormInput
                            type="text"
                            name="companyName"
                            label="Nombre de la empresa"
                            placeholder="Nombre de la empresa"
                            defaultValue={client?.companyName}
                        />

                        <FormInput
                            type="text"
                            name="identificationNumber"
                            label="Número de identificación"
                            placeholder="Número de identificación (NIT, cédula o pasaporte)"
                            defaultValue={client?.identificationNumber}
                        />
                        <FormInput
                            type="email"
                            name="email"
                            label="Correo electrónico"
                            placeholder="Correo electrónico"
                            defaultValue={client?.email}
                        />

                        <FormInput
                            type="text"
                            name="phone"
                            label="Teléfono"
                            placeholder="Número de teléfono"
                            defaultValue={client?.phone}
                        />
                        <FormInput
                            type="select"
                            name="type"
                            label="Tipo de cliente"
                            placeholder="Tipo de cliente"
                            options={['Inquilino', 'Copropietario']}
                            defaultValue={client?.type}
                        />
                        <FormInput
                            type="text"
                            name="contact"
                            label="Persona de contacto"
                            placeholder="Contacto"
                            defaultValue={client?.contact}
                        />
                        <FormInput
                            type="text"
                            name="beneficiary"
                            label="Nombre del beneficiario"
                            placeholder="Nombre del beneficiario"
                            defaultValue={client?.beneficiary}
                        />
                        <FormInput
                            type="text"
                            name="property"
                            label="Propiedad"
                            placeholder="Nombre de la propiedad"
                            defaultValue={client?.property}
                        />
                        <FormInput
                            type="textarea"
                            name="paymentInstructions"
                            label="Instrucciones de pago"
                            placeholder="Instrucciones de pago"
                            defaultValue={client?.paymentInstructions}
                        />

                        <div className="mt-4">
                            <div className="my-2">
                                {/* Feedback visual */}
                                {state?.error && (
                                    <p className="rounded-xl bg-red-200 p-4 text-sm text-red-600">
                                        {state.error}
                                    </p>
                                )}
                                {state?.success && (
                                    <p className="rounded-xl bg-green-200 p-4 text-sm text-green-600">
                                        {state.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                    disabled={isPending}
                                >
                                    {isPending
                                        ? 'Procesando...'
                                        : client
                                          ? 'Actualizar'
                                          : 'Guardar'}
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="cursor-pointer rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientModal;
