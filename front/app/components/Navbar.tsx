import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Boutique</h1>
        <div className="space-x-4">
          <Link href="/boutique" className="hover:underline">
            Boutique
          </Link>
          <Link href="/admin" className="hover:underline">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
