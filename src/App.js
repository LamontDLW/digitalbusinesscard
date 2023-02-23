import Hero from "./components/Hero";
import About from "./components/About";
import Social from "./components/Social";
import "./styles/index.css"

export default function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Social />
    </div>
  );
}
