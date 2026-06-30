import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
      bg-slate-900
      text-white
      px-8
      py-4
      flex
      gap-8
      shadow-lg
    "
    >
      <Link
        className="
        hover:text-cyan-400
        transition
        "
        to="/"
      >
        🧬 Home
      </Link>

      <Link
        className="
        hover:text-cyan-400
        transition
        "
        to="/proteins"
      >
        🔬 Proteins
      </Link>
    </nav>
  );
}

export default Navbar;
