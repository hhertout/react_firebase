import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/userContext"

export default function Notes() {
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=> {
        if(!currentUser){
            navigate("/")
        }
    }, [])

    return <div className="container m-auto">
        <h1 className="text-xl font-bold">Mes notes stoquées sur Firebase : </h1>
    </div>
}