import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserForm() {
   const { formData, setFormData } = useContext(UserContext);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   return (
      <div>
         <h2>Форма користувача</h2>
         <form>
            <input
               type="text"
               name="name"
               placeholder="Ім'я"
               value={formData.name}
               onChange={handleChange}
            />
            <input
               type="text"
               name="surname"
               placeholder="Прізвище"
               value={formData.surname}
               onChange={handleChange}
            />
            <input
               type="text"
               name="groupCode"
               placeholder="Код групи"
               value={formData.groupCode}
               onChange={handleChange}
            />
            <input
               type="email"
               name="email"
               placeholder="Електронна пошта"
               value={formData.email}
               onChange={handleChange}
            />
         </form>
      </div>
   );
}

export default UserForm;
