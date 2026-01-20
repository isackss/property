"use client";

import { useState } from "react";
import { clientsData } from "@/lib/data";

type Props = {};

const Page = (props: Props) => {
  const [isActive, setIsActive] = useState("false");

  const [searchTerm, setSearchTerm] = useState("");

  const clientsFiltered = clientsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm),
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Aquí deberías obtener los datos reales de los clientes
  return (
    <main className="p-2 bg-blue-50 min-h-screen">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="font-semi-bold text-2xl">Clientes</h1>
          <p className="text-sm text-gray-500">
            Ver toda la información de los clientes
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 rounded-md text-sm dark:text-white">
            Agregar Cliente
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded-md text-sm dark:text-white">
            Descargar Reporte
          </button>
        </div>
      </header>
      {/* Filtro */}
      <div className="flex gap-2 p-2 border-b border-gray-300">
        <button className="px-4 py-2 bg-blue-500 rounded-md text-sm dark:text-white isActive">
          Todos
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md text-sm text-blue-500">
          Compradores
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md text-sm text-blue-500">
          Inquilinos
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md text-sm text-blue-500">
          Propietarios
        </button>
      </div>
      {/* Search */}
      <div className="my-4 px-4 flex items-center gap-2 justify-center bg-blue-100 rounded-2xl border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
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
          className="w-full p-4 rounded-2xl outline-none text-sm flex-1"
          onChange={handleInputChange}
        />
      </div>
      {/* Tabla de clientes */}
      <div className="border border-gray-300 rounded-xl bg-blue-100 mt-5 overflow-hidden">
        <table className="w-full table-fixed border-collapse text-sm">
          <thead className="w-full bg-blue-300 rounded-2xl">
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
                <tr key={client.id} className="hover:bg-blue-200">
                  <td className="border-b border-gray-100 p-2 pl-8 text-gray-600">
                    <div className="flex gap-4 items-center">
                      <div className="rounded-full bg-amber-300 w-15 h-15 text-2xl flex items-center justify-center">
                        {client.name
                          .split(" ")
                          .map((letter) => letter[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-lg">{client.name}</p>
                        <p className="text-gray-500">{client.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-100 text-gray-600 text-center">
                    {client.contacto}
                  </td>
                  <td className="border-b border-gray-100 text-gray-600v text-center">
                    {client.beneficiarios}
                  </td>
                  <td className="border-b border-gray-100 text-gray-600 text-center">
                    {client.propiedades}
                  </td>
                  <td className="border-b border-gray-100 text-gray-600">
                    <div className="flex gap-4 justify-center">
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
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No se encontraron clientes.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Page;
