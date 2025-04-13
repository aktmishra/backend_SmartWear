import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./component/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout></UserLayout>}>
          {/*user Layout*/}
          {/* home page to be index page */}
          <Route index element={<Home/>} ></Route>
        </Route>
        <Route>{/*admin Layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
