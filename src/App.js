import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/page1" element={<Page1 city="Kramatorsk" />} />
          <Route path="/page2" element={<Page2 hobby="Drawing" />} />
          <Route path="*" element={<Navigate to="/page1" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
