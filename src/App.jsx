 
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./component/Layout/UserLayout";
import Home from "./pages/Home";
import {Toaster} from "sonner"
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  

  return (
    <BrowserRouter>
    <Toaster position="top-right" richColors  /> 
      <Routes>
        <Route path="/" element={<UserLayout></UserLayout>}>
          {/*user Layout*/}
          {/* home page to be index page */}
          <Route index element={<Home/>} ></Route>
          <Route path="login" element={<Login/>} ></Route>
          <Route path="register" element={<Register/>} ></Route>
        </Route>
        <Route>{/*admin Layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
