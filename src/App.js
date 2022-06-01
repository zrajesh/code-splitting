import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page404 from "./components/Page404";
import './App.css';

const LazyPage2 = React.lazy(() => import("./components/Page2"));
const LazyPage3 = React.lazy(() => import("./components/Page3"));

function App() {
  return (
    <div className="App">
      <h1>Code Splitting</h1>
      <React.Suspense fallback={
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h2>LOADING...</h2>
        </div>
      }>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<LazyPage2 />} />
          <Route path="/page3" element={<LazyPage3 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
