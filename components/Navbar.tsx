import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center bg-gray-800 p-2">
            <div className="flex flex-1 items-center text-white">
                <Image
                    src="/assets/img/icon.png"
                    alt="Property App Logo"
                    width={35}
                    height={35}
                    className="mr-2 inline-block"
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
                    <li className="p-2 hover:bg-gray-700">Home</li>
                </Link>
                <Link href="/clients" className="flex items-center">
                    <Image
                        src="/assets/img/client.png"
                        alt="Property App Logo"
                        width={20}
                        height={20}
                        className="inline-block invert"
                    />
                    <li className="p-2 hover:bg-gray-700">Clients</li>
                </Link>
                <Link href="/properties" className="flex items-center">
                    <Image
                        src="/assets/img/apartment.png"
                        alt="Property App Logo"
                        width={20}
                        height={20}
                        className="inline-block invert"
                    />
                    <li className="p-2 hover:bg-gray-700">Properties</li>
                </Link>
                <Link href="/contracts" className="flex items-center">
                    <Image
                        src="/assets/img/signature.png"
                        alt="Property App Logo"
                        width={20}
                        height={20}
                        className="inline-block invert"
                    />
                    <li className="p-2 hover:bg-gray-700">Contracts</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
