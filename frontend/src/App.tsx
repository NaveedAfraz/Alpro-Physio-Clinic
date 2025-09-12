import Home from "./pages/home";
import { Routes, Route } from "react-router";
import { CuppingCoursePage } from "./components/page2/cupping";
import { MedicalTourismPage } from "./components/page3/tourism";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cupping-therapy" element={<CuppingCoursePage />} />
        <Route path="/medical-tourism" element={<MedicalTourismPage />} />
      </Routes>
    </>
  );
}

export default App;
