import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

axios.defaults.withCredentials = true;

const AuthContext = createContext({
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  refresh: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/auth/me`);
      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // If returning from Emergent OAuth callback, skip /me — let AuthCallback finish
    if (typeof window !== "undefined" && window.location.hash?.includes("session_id=")) {
      setLoading(false);
      return;
    }
    refresh();
  }, [refresh]);

  const login = useCallback(async (email, password) => {
    const { data } = await axios.post(`${API}/auth/login`, { email, password });
    setUser(data.user);
    return data.user;
  }, []);

  const register = useCallback(async (username, email, password) => {
    const { data } = await axios.post(`${API}/auth/register`, { username, email, password });
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await axios.post(`${API}/auth/logout`);
    } catch (error) {
      console.error("Logout request failed (clearing client state anyway):", error);
    }
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, login, register, logout, refresh }),
    [user, loading, login, register, logout, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
export { API };
