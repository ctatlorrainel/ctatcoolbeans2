import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Download from "./routes/download";
import Purchase from "./routes/purchase";
import Signup from "./routes/signup";
import Custom from "./routes/custom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="download" element={<Download />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="signup" element={<Signup />} />
        <Route path="custom" element={<Custom />} />
      </Route>    
    </Routes>
  </Router>,
  //<App />,
  document.getElementById("root")
);

//serviceWorker.unregister();
