import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Enlightens
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-black">
            Menu
          </Link>
          <Link to="/ambiance" className="text-gray-700 hover:text-black">
            Ambiance
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-black">
            Events
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
          <Link
            to="/book"
            className="text-white bg-black px-3 py-1 rounded hover:bg-gray-800"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
