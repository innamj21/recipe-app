import {  Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home"; 
import Recipes from "./pages/Recipes";
import Upload from "./pages/Upload";
import Conversion from "./pages/Conversion";
import Bin from "./pages/Bin";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/upload">Upload</Link> |{" "}
        <Link to="/recipes">Recipes</Link> |{" "}
        <Link to="/conversion">Conversion</Link> |{" "}
        <Link to="/bin">Bin</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/conversion" element={<Conversion />} />
        <Route path="/bin" element={<Bin />} />
      </Routes>
    </>

  );
}

export default App;
