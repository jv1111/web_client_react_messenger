import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pages from "./pages"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pages.Home/>}/>
            <Route path="/auth" element={<Pages.Auth/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
