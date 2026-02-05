'use client';

import { useState } from 'react';
import { deleteClient } from '@/app/actions/clientActions';
import ClientModal from './ClientModal';
/* import { clientsData } from "@/lib/data" */

type Client = {
    _id: string;
    name: string;
    clientType: string;
    contact: string;
    beneficiary: string;
    property: string;
    paymentInstructions: string;
};

const ClientsTable = ({ clients }: { clients: Client[] }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<any>(null);

    const openCreate = () => {
        setSelectedClient(null);
        setIsModalOpen(true);
        console.log(isModalOpen);
    };

    const openEdit = (client: any) => {
        setSelectedClient(client);
        setIsModalOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const clientsFiltered = clients.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            {/* Modal */}
            {isModalOpen && (
                <ClientModal
                    onClose={() => setIsModalOpen(false)}
                    client={selectedClient}
                />
            )}
            {/* Filtro */}
            <div className="flex w-full items-center justify-between">
                <div className="flex gap-2 border-b border-gray-300 p-2">
                    <button className="isActive rounded-md bg-blue-500 px-4 py-2 text-sm dark:text-white">
                        Todos
                    </button>
                    <button className="rounded-md border border-blue-500 px-4 py-2 text-sm text-blue-500">
                        Compradores
                    </button>
                    <button className="rounded-md border border-blue-500 px-4 py-2 text-sm text-blue-500">
                        Inquilinos
                    </button>
                </div>
                <button
                    className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-sm hover:bg-blue-600 dark:text-white"
                    onClick={openCreate}
                >
                    + Crear nuevo cliente
                </button>
            </div>

            {/* Search */}
            <div className="my-4 flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-blue-100 px-4 focus-within:ring-2 focus-within:ring-blue-500">
                <p className="text-blue-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </p>
                <input
                    type="text"
                    placeholder="Buscar cliente..."
                    className="w-full flex-1 rounded-2xl p-4 text-sm outline-none"
                    onChange={handleInputChange}
                />
            </div>
            {/* Tabla de clientes */}
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-300 bg-blue-100">
                <table className="w-full table-fixed border-collapse text-sm">
                    <thead className="w-full rounded-2xl bg-blue-300">
                        <tr>
                            <th className="border-b border-blue-400 text-center font-medium text-gray-900">
                                <div className="p-4">Cliente</div>
                            </th>
                            <th className="border-b border-blue-400 text-center font-medium text-gray-900">
                                <div className="p-4">Contacto</div>
                            </th>
                            <th className="border-b border-blue-400 text-center font-medium text-gray-900">
                                <div className="p-4">Beneficiario</div>
                            </th>
                            <th className="border-b border-blue-400 text-center font-medium text-gray-900">
                                <div className="p-4">Propiedad</div>
                            </th>
                            <th className="border-b border-blue-400 text-center font-medium text-gray-900">
                                <div className="p-4">Acciones</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {clientsFiltered.length > 0 ? (
                            clientsFiltered.map((client) => (
                                <tr
                                    key={client._id}
                                    className="hover:bg-blue-200"
                                >
                                    <td className="border-b border-gray-100 p-2 pl-8 text-gray-600">
                                        <div className="flex items-center gap-4">
                                            <div className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-amber-300">
                                                {client.name
                                                    .split(' ')
                                                    .map(
                                                        (letter: string) =>
                                                            letter[0]
                                                    )
                                                    .join('')
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>
                                            <div>
                                                <p>{client.name}</p>
                                                <p className="text-gray-500">
                                                    {client.clientType}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-100 text-center text-gray-600">
                                        {client.contact}
                                    </td>
                                    <td className="border-b border-gray-100 text-center text-gray-600">
                                        {client.beneficiary}
                                    </td>
                                    <td className="border-b border-gray-100 text-center text-gray-600">
                                        {client.property}
                                    </td>
                                    <td className="border-b border-gray-100 text-gray-600">
                                        <div className="flex justify-center gap-4">
                                            <button
                                                className="text-green-500 hover:text-green-700"
                                                title="view"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                title="edit"
                                                onClick={() => openEdit(client)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                                    />
                                                </svg>
                                            </button>
                                            <form
                                                action={async () => {
                                                    if (
                                                        confirm(
                                                            'Are you sure you want to delete this client?'
                                                        )
                                                    ) {
                                                        await deleteClient(
                                                            client._id
                                                        );
                                                    }
                                                }}
                                            >
                                                <button
                                                    className="text-red-500 hover:text-red-700"
                                                    title="delete"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="size-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                        />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="p-4 text-center text-gray-500"
                                >
                                    No se encontraron clientes.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="p-4 text-center text-gray-600">
                    Total de registros: {clientsFiltered.length}
                </div>
            </div>
        </div>
    );
};

export default ClientsTable;
