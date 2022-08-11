import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopMenu from "./components/TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <TopMenu />
      <Home greeting="Hello, cats! 😸" />
      <Footer />
    </>
  );
}

export default App;
