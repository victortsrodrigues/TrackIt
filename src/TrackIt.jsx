import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import TokenContext from "./contexts/TokenContext";

export default function TrackIt() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("image"));

  return (
    <>
      <TokenContext.Provider value={{token, setToken}}>
      <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }} >
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/hoje" element={<TodayPage />} />
            </Routes>
          </BrowserRouter>
      </UserContext.Provider>
      </TokenContext.Provider>
    </>
  )
}