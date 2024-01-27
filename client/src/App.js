import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/commonResource/Shared/sharedLayout";
import Home from "./components/commonResource/pages/HomePage/home";
import Store from "./components/commonResource/pages/Store/Store";
import Mac from "./components/commonResource/pages/Mac/Mac";
import Iphone from "./components/commonResource/pages/Iphone/Iphone";
import Watch from "./components/commonResource/pages/Watch/Watch";
import Airpods from "./components/commonResource/pages/Airpods/Airpods";
import Four04 from "./components/commonResource/pages/Four04/Four04";
import LearnMore from "./components/commonResource/pages/Iphone/learnMore/learnMore";

function App() {
  return (
    <Routes>  
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphones" element={<Iphone />} />
        <Route path="iphones/:productUrl" element={<LearnMore  />} />
        <Route path="watch" element={<Watch />} />
        <Route path="aripods" element={<Airpods />} />
        
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
