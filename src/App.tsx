import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components";
import { OPTIONS } from "./constants";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={OPTIONS.HOME.routerLink} element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
