import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import UserPage from "./pages/UserPage.jsx";
import Transactions from "./pages/Transactions.jsx";
import Error404 from "./pages/Error404.jsx";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/transactions" element={<Transactions />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default Routing;
