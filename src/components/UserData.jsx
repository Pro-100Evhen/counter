import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserData() {
   const { name, surname, groupCode, email } = useContext(UserContext);

   return (
      <div className="data-container">
         <h2>Введені дані:</h2>
         <ul>
            <li>
               <strong>Ім'я:</strong> {name}
            </li>
            <li>
               <strong>Прізвище:</strong> {surname}
            </li>
            <li>
               <strong>Код групи:</strong> {groupCode}
            </li>
            <li>
               <strong>Email:</strong> {email}
            </li>
         </ul>
      </div>
   );
}
