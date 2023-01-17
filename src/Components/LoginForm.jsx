import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { auth } from "../firebase-config";

export default function LoginForm() {
    const { signIn, currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [validation, setValidation] = useState("");
    const form = useRef();

    const email = useRef();
    const password = useRef();

    const handleSubmit = async e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(credential => {
            console.log("ok")
            navigate("/")
        })
        .catch(err => {
            console.log("not ok" + err)
            setValidation("Identifiants incorrect !")
        })
    };

    return (
        <form onSubmit={handleSubmit} ref={form} className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="rounded my-1"
                ref={email}
            />

            <label htmlFor="password">Mot de passe</label>
            <input
                type="password"
                id="password"
                name="password"
                className="rounded my-1"
                ref={password}
            />

            <div className="text-red mt-2">{validation}</div>

            <button className="bg-purple rounded py-3 my-3">Connexion</button>
        </form>
    );
}
