import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState("");
    const [loadingData, setLoadingData] = useState(true);

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser);
            setLoadingData(false);
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={{ signUp, currentUser, setCurrentUser }}>
            {!loadingData && props.children}
        </UserContext.Provider>
    );
}
