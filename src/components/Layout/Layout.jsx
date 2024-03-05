import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MovieListProvider } from "@/contexts/MovieList";
import { AuthProvider } from "@/contexts/AuthContext";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const Layout = () => {
  const windowSize = useWindowSize();

  return (
    <AuthProvider>
      <ThemeProvider>
        <MovieListProvider>
          {windowSize.width >= 768 ? <Navbar /> : <MobileNavbar />}
          <Outlet />
        </MovieListProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
export default Layout;
