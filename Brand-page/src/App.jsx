import Header from "./components/Header";
import Heading from "./components/Content";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [islogin, setLogin] = useState(false);
  const HandleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Heading />
      <Footer />
    </>
  );
}

export default App;
