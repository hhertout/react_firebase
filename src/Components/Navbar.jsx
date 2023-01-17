import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

export default function Navbar() {
    const navigate = useNavigate()
    const {currentUser} = useContext(UserContext)

    const logout = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch {
            alert("Erreur")
        }
    }
    return (
        <nav className="p-4 mb-8 bg-purple text-white flex justify-between items-center">
            <div>
                <Link to="/" className="p-2">
                    Accueil
                </Link>
                <Link to="/connexion" className="p-2">
                    Connexion
                </Link>
            </div>
            <div>
                { currentUser ? <button onClick={logout} className="p-2">Déconnexion</button> : ""}
            </div>
        </nav>
    );
}
