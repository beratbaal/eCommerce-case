import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold">E-Ticaret Sitesi</h1>
        <div>
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
