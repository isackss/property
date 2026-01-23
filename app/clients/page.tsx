
import { clientsData } from "@/lib/data";
import AddClientModal from "@/components/AddClientModal";
import Link from "next/link";
import ClientsTable from "@/components/ClientsTable";

export default async function Page ({
  searchParams,
}: {
  searchParams: Promise < {
    [key: string]: string | string[] | undefined
  } > ;
}) {
  const { modal } = await searchParams;

  /* const [searchTerm, setSearchTerm] = useState(""); */

 /*  const clientsFiltered = clientsData.filter((item) =>
    item.name.toLowerCase().includes("")
  );
 */
 /*  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }; */

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
      <ClientsTable />
    </main>
  );
};
