import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="p-4 mb-8 bg-purple text-white">
            <Link to="/"  className="p-2">Accueil</Link>
            <Link to="/connexion" className="p-2">Connexion</Link>
        </nav>
    );
}
