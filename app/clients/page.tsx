import { dbConnect } from '@/lib/mongodb';
import { Client } from '@/models/Client';
import Link from 'next/link';

import ClientsTable from '@/components/ClientsTable';

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}) {
    async function fetchClients() {
        await dbConnect();
        const clients = await Client.find({}).lean();
        const plainData = JSON.parse(JSON.stringify(clients));
        console.log('Fetched clients:', plainData);
        return plainData;
    }

    const clientsList = await fetchClients();

    // Aquí deberías obtener los datos reales de los clientes
    return (
        <main className="min-h-screen bg-blue-50 p-2">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="font-semi-bold text-2xl">Clientes</h1>
                    <p className="text-sm text-gray-500">
                        Ver toda la información de los clientes
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-sm hover:bg-blue-600 dark:text-white">
                        Descargar Reporte
                    </button>
                </div>
            </header>
            <ClientsTable clients={clientsList} />
        </main>
    );
}
