import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useRef } from "react";
import { auth } from "../firebase-config";

export default function RegisterForm() {
    const [validation, setValidation] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [loadingData, setLoadingData] = useState(true);
    const formRef = useRef();

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    const inputs = useRef([]);
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (
            (inputs.current[1].value.length || inputs.current[2].value.length) <
            6
        ) {
            setValidation("6 char mini");
            return;
        } else if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Les mots de passe doivent être identiques");
            return;
        }
        try {

            const cred = await signUp(inputs.current[0].value, inputs.current[1].value)

            formRef.current.reset();
            setValidation("");
            console.log(cred)

        } catch(err) {
            if(err.code === "auth/invalid-email"){
                setValidation("Format de l'email invalide")
            }
            if(err.code === "auth/email-already-in-use"){
                setValidation("Cette adresse mail existe déjà")
            }
            setValidation("Une erreur est survenue")
        }
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="rounded my-1"
                ref={addInputs}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                className="rounded my-1"
                ref={addInputs}
            />

            <label htmlFor="confirmPassword">Confirmer le Mot de passe</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="rounded my-1"
                ref={addInputs}
            />
            <p>{validation}</p>

            <button type="submit" className="bg-purple rounded p-3 my-3">
                S'inscrire
            </button>
        </form>
    );
}
