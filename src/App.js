import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pages from "./pages"
import useSessionChecker from "./hooks/useSessionChecker"
import LoadingPage from "./pages/Loading/Loading";

function App() {

  const { isLoading, auth } = useSessionChecker();

  if(isLoading){
    return <LoadingPage/>
  }

  console.log(auth);

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            {/* TODO ADD IT TO CS */}
            <Route element={<Pages.ProtectedRoute isAllowed={auth.isLoggedIn} redirectPath={"/auth"}/>}>
              <Route path="/" element={<Pages.Home/>}/>
            </Route>

            <Route path="/auth" element={<Pages.Auth/>}/>
            <Route path="/register" element={<Pages.Register/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
