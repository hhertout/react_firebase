import { Link } from "react-router-dom";
import RegisterForm from "../Components/RegisterForm";

export default function Register() {
    return (
        <div className="mt-5 max-w-xl m-auto p-20 border border-gray-light shadow-lg rounded-xl">
            <div className="max-w-lg m-auto">
                <RegisterForm />
                <Link to="/connexion" className="p-2 px-6 bg-blue rounded">⬅️ Retour</Link>
            </div>
        </div>
    );
}
