import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { RosctCaseStudy } from "./pages/case-studies/RosctCaseStudy";
import { DabCaseStudy } from "./pages/case-studies/dab";
import { UnownCaseStudy } from "./pages/case-studies/unown";

function App() {
  return (
    <BrowserRouter>
      <div className="font-satoshi min-h-svh bg-white text-left">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-studies/rosct" element={<RosctCaseStudy />} />
            <Route path="/case-studies/dab" element={<DabCaseStudy />} />
            <Route path="/case-studies/unown" element={<UnownCaseStudy />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
