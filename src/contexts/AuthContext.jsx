import { createContext, useState, useContext } from "react";
const localStorageKey = "user";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    sessionStorage.getItem(localStorageKey) || null
  );

  const login = (email, password) => {
    // Burada normalde bir API çağrısı yapılır ve kullanıcı bilgileri alınırdı
    // Ancak bu örnek için basitleştirmek adına sabit bir kullanıcı kullanacağız
    const userData = {
      email,
      // Şifre güvenlik nedeniyle depolanmamalıdır, bu sadece örnek için geçerlidir
      password,
      // Diğer kullanıcı bilgileri buraya eklenebilir
    };
    setUser(userData);
    // Kullanıcı bilgilerini session storage'a kaydet
    sessionStorage.setItem(localStorageKey, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    // Oturumu sonlandırırken session storage'dan kullanıcı bilgilerini kaldır
    sessionStorage.removeItem(localStorageKey);
  };

  const values = { user, login, logout };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
