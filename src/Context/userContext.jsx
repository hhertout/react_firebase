import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {

    return <UserContext.Provider>{props.children}</UserContext.Provider>;
}
