import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
