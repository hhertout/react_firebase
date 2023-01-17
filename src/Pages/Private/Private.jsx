import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

export default function Private() {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/")
        }
    }, []);

    return <div>Partie Admin</div>;
}
