import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogIn/LogIn";
import SignUpPage from "./pages/SignUp/SignUp";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="login" element={<LogInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
