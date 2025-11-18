import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 p-2 items-center">
      <div className="flex-1 text-white flex items-center">
        <Image
          src="/assets/img/icon.png"
          alt="Property App Logo"
          width={35}
          height={35}
          className="inline-block mr-2"
        />
        <h1 className="text-xl">Property App</h1>
      </div>
      <ul className="flex space-x-4 text-white">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/img/home.png"
            alt="Property App Logo"
            width={20}
            height={20}
            className="inline-block invert"
          />
          <li className="hover:bg-gray-700 p-2">Home</li>
        </Link>
        <Link href="/properties" className="flex items-center">
          <Image
            src="/assets/img/apartment.png"
            alt="Property App Logo"
            width={20}
            height={20}
            className="inline-block invert"
          />
          <li className="hover:bg-gray-700 p-2">Properties</li>
        </Link>
        <Link href="/clients" className="flex items-center">
          <Image
            src="/assets/img/client.png"
            alt="Property App Logo"
            width={20}
            height={20}
            className="inline-block invert"
          />
          <li className="hover:bg-gray-700 p-2">Clients</li>
        </Link>
        <Link href="/contracts" className="flex items-center">
          <Image
            src="/assets/img/signature.png"
            alt="Property App Logo"
            width={20}
            height={20}
            className="inline-block invert"
          />
          <li className="hover:bg-gray-700 p-2">Contracts</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
