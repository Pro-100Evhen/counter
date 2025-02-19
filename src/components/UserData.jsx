import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserData() {
   const { formData } = useContext(UserContext);

   return (
      <div className="data-container">
         <h2>Введені дані</h2>
         <ul>
            <li>
               <strong>Ім'я:</strong> {formData.name}
            </li>
            <li>
               <strong>Прізвище:</strong> {formData.surname}
            </li>
            <li>
               <strong>Код групи:</strong> {formData.groupCode}
            </li>
            <li>
               <strong>Email:</strong> {formData.email}
            </li>
         </ul>
      </div>
   );
}

export default UserData;
