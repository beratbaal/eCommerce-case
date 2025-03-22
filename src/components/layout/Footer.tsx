import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-gray-800 text-white text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <FaFacebook className="text-2xl cursor-pointer" />
        <FaTwitter className="text-2xl cursor-pointer" />
        <FaInstagram className="text-2xl cursor-pointer" />
      </div>
      <div className="text-sm">
        <p>&copy;2025 E-Ticaret | Tüm Hakları Saklıdır.</p>
        <p>Site Haritası | Gizlilik Politikası</p>
      </div>
    </footer>
  );
};

export default Footer;
