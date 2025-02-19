import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserForm() {
   const {
      name,
      setName,
      surname,
      setSurname,
      groupCode,
      setGroupCode,
      email,
      setEmail,
   } = useContext(UserContext);

   return (
      <div className="form-container">
         <h2>Введіть дані</h2>
         <input
            type="text"
            name="name"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="text"
            name="surname"
            placeholder="Прізвище"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
         />
         <input
            type="text"
            name="groupCode"
            placeholder="Код групи"
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value)}
         />
         <input
            type="email"
            name="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
      </div>
   );
}
