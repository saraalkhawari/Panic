import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import styles from "./Styles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Screening from "./Components/pages/Screening";
import PartAQ from "./Components/pages/PartAQ";
import PartBQ from "./Components/pages/PartBQ";
import PartQ5 from "./Components/pages/PartQ5";
import Questions from "./Components/pages/Questions";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Home" exact Component={Home} />
          <Route path="/Screening" exact Component={Screening} />
          <Route path="/PartA" exact Component={PartAQ} />
          <Route path="/PartB" exact Component={PartBQ} />
          <Route path="/Part5" exact Component={PartQ5} />
          <Route path="/Questions" exact Component={Questions} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
