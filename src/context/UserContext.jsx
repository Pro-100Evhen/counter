import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
   const [name, setName] = useState("");
   const [surname, setSurname] = useState("");
   const [groupCode, setGroupCode] = useState("");
   const [email, setEmail] = useState("");

   return (
      <UserContext.Provider
         value={{
            name,
            setName,
            surname,
            setSurname,
            groupCode,
            setGroupCode,
            email,
            setEmail,
         }}
      >
         {children}
      </UserContext.Provider>
   );
}
