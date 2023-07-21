import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components";
import { OPTIONS } from "./constants";
import { Home } from "./pages";
import { LanguageProvider } from "./context";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Routes>
          <Route path={OPTIONS.HOME.routerLink} element={<Home />} />
        </Routes>
      </main>
    </LanguageProvider>
  );
}

export default App;
