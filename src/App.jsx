import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import MovieDetail from "@/pages/MovieDetail";
import FavList from "@/pages/FavList";

import "./scss/styles.scss";
import Login from "@/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="m/:id" element={<MovieDetail />} />
          <Route path="favoriler" element={<FavList />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>Sayfa Bulunamadı</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
