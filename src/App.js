import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pages from "./pages"
import useSessionChecker from "./hooks/useSessionChecker"

function App() {

  const { isLoading, auth } = useSessionChecker();

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pages.Home/>}/>
            <Route path="/auth" element={<Pages.Auth/>}/>
            <Route path="/register" element={<Pages.Register/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
