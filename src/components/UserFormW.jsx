import { useState } from "react";

function UserForm() {
   const [formData, setFormData] = useState({
      name: "",
      surname: "",
      groupCode: "",
      email: "",
   });
   const [submittedData, setSubmittedData] = useState(null);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedData(formData);
   };

   return (
      <div className="form-container">
         <h2>Форма користувача</h2>
         <form onSubmit={handleSubmit}>
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
            <button type="submit">Зберегти</button>
         </form>
         {submittedData && (
            <div className="data-container">
               <h2>Введені дані</h2>
               <ul>
                  <li>
                     <strong>Ім'я:</strong> {submittedData.name}
                  </li>
                  <li>
                     <strong>Прізвище:</strong> {submittedData.surname}
                  </li>
                  <li>
                     <strong>Код групи:</strong> {submittedData.groupCode}
                  </li>
                  <li>
                     <strong>Email:</strong> {submittedData.email}
                  </li>
               </ul>
            </div>
         )}
      </div>
   );
}

export default UserForm;
