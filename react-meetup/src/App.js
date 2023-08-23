import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="allmeetups" element={<AllMeetupsPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="newmeetup" element={<NewMeetupsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
