import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
   const [formData, setFormData] = useState({
      name: "",
      surname: "",
      groupCode: "",
      email: "",
   });

   return (
      <UserContext.Provider value={{ formData, setFormData }}>
         {children}
      </UserContext.Provider>
   );
}
