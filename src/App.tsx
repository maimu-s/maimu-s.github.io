import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MaimuMenuPage from "./pages/MaimuMenuPage";
import ProfilePanel from "./pages/panels/ProfilePanel";
import HistoryPanel from "./pages/panels/HistoryPanel";
import VideosPanel from "./pages/panels/VideosPanel";
import AffiliationsPanel from "./pages/panels/AffiliationsPanel";
import "./css/style.css";

function Layout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/talent/maimu" element={<MaimuMenuPage />}>
          <Route path="profile" element={<ProfilePanel />} />
          <Route path="history" element={<HistoryPanel />} />
          <Route path="videos" element={<VideosPanel />} />
          <Route path="affiliations" element={<AffiliationsPanel />} />
        </Route>
      </Route>
    </Routes>
  );
}
