import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Landing from "@/pages/Landing";
import Recursos from "@/pages/Recursos";
import Ferramentas from "@/pages/Ferramentas";
import Planos from "@/pages/Planos";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";
import Dashboard from "@/pages/Dashboard";
import AuthCallback from "@/pages/AuthCallback";

function AppRouter() {
  const location = useLocation();
  // Synchronous hash check — Emergent OAuth returns #session_id=...
  if (location.hash?.includes("session_id=")) {
    return <AuthCallback />;
  }
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/ferramentas" element={<Ferramentas />} />
      <Route path="/planos" element={<Planos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
