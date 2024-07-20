import "./App.css";
import "./Query.css";
import Experience from "./Experience";
import { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Message from "./Message";
import Services from "./Services";
import Footer from "./Footer";

export default function App() {
  useEffect(function () {
    document.title = "Mechdly";
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Message />
      <Services />
      <Experience />
      <Footer />
    </div>
  );
}

// HERO
