import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import ChangePasswordPage from "./pages/ChangePassword";
import LeaderBoard from "./pages/LeaderBoard";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Layout from "./Layout";
import Recharge from "./pages/Recharge";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/changepassword" element={<ChangePasswordPage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/leaderboard/:id" element={<LeaderBoard />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recharge" element={<Recharge />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
