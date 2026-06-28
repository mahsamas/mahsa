import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { RosctCaseStudy } from "./pages/case-studies/RosctCaseStudy";
import { DabCaseStudy } from "./pages/case-studies/dab";
import { UnownCaseStudy } from "./pages/case-studies/unown";

function App() {
  return (
    <BrowserRouter>
      <div className="font-satoshi flex min-h-svh flex-col bg-white text-left">
        <Navbar />
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies/rosct" element={<RosctCaseStudy />} />
            <Route path="/case-studies/dab" element={<DabCaseStudy />} />
            <Route path="/case-studies/unown" element={<UnownCaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
