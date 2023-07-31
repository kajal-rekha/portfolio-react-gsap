import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
//import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/skills" element={<Skills />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
