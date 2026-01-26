import { dbConnect } from "@/lib/mongodb";
import { Client } from "@/models/Client";
import Link from "next/link";

import AddClientModal from "@/components/AddClientModal";
import ClientsTable from "@/components/ClientsTable";

export default async function Page ({
  searchParams,
}: {
  searchParams: Promise < {
    [key: string]: string | string[] | undefined
  } > ;
}) {
  
  const { modal } = await searchParams;

  async function fetchClients() {
    await dbConnect();
    const clients = await Client.find({}).lean();
    const plainData = JSON.parse(JSON.stringify(clients));
    console.log("Fetched clients:", plainData);
    return plainData;
  }

  const clientsList = await fetchClients();

  // Aquí deberías obtener los datos reales de los clientes
  return (
    <main className="p-2 bg-blue-50 min-h-screen">
      {modal && <AddClientModal />}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="font-semi-bold text-2xl">Clientes</h1>
          <p className="text-sm text-gray-500">
            Ver toda la información de los clientes
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/clients?modal=true" className="px-4 py-2 bg-blue-500 rounded-md text-sm dark:text-white hover:bg-blue-600 cursor-pointer">
            Agregar Cliente
          </Link>
          <button className="px-4 py-2 bg-blue-500 rounded-md text-sm dark:text-white hover:bg-blue-600 cursor-pointer">
            Descargar Reporte
          </button>
        </div>
      </header>
      <ClientsTable clients={clientsList} />
    </main>
  );
};
