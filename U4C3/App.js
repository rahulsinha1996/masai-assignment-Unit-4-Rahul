import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Mainroutes from "./Components/Routes/MainRoutes";
import { AuthContextProvider } from "./Components/context/AuthContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
      <Mainroutes />
      </AuthContextProvider>
       </BrowserRouter>
      
    </div>
  );
}
export default App;
