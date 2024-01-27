import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/stayle.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/commonResource/functionality/ForScroll/sometest";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
      {/* </ScrollToTop> */}
    </Router>
  </React.StrictMode>
);
