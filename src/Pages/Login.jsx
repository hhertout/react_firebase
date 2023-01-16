import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm";

export default function Login() {
    return (
        <div className="mt-5 max-w-xl m-auto p-20 border border-gray-light shadow-lg rounded-xl">
            <div className="max-w-lg m-auto">
                <LoginForm />
                <div>
                    <p>
                        Pas encore inscrit ?{" "}
                        <Link to="/inscription" className="underline">
                            S'incrire
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
