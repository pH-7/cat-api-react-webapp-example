import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <Layout>
      <TopMenu />
      <Home greeting="All about cats 🐱" />
      <Footer />
    </Layout>
  );
}

export default App;
