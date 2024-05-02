import { Routes, Route } from "react-router-dom";
import "./App.css";
import SitesPage from "./features/Sites/pages/SitesPage";
import MainPageLayout from "./MainPageLayout";
import GlobePage from "./features/Sites/pages/GlobePage";

function App() {
  return (
    <Routes>
      <Route element={<MainPageLayout />}>
        <Route path="/" element={<SitesPage />} />
        <Route path="/globe/:lat/:lng" element={<GlobePage />} />
      </Route>
    </Routes>
  );
}

export default App;
