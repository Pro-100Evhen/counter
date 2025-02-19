import "./App.css";
import Title from "./components/Title";
import UserData from "./components/UserData";
import UserForm from "./components/UserForm";
import { UserProvider } from "./context/UserContext";

function App() {
   return (
      <UserProvider>
         <div className="container">
            <Title />
            <UserForm />
            <UserData />
         </div>
      </UserProvider>
   );
}

export default App;
