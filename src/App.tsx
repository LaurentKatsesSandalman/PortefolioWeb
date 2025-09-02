import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
//import { CountriesProvider } from "./contexts/CountriesContext";





//FUNCTION APP
function App() {
  return (
    //<CountriesProvider  >
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>  
    //</CountriesProvider>
  );

}

export default App;
