// Utils
import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabbitsPage from "./pages/HabbitsPage/HabbitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";

// Contexts
import { userContext } from "./contexts/userContext";

export default function App() {
  return (
    <userContext.Provider value={[]}>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabbitsPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}
