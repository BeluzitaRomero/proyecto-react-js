import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/CartWidget/CartWidget.css";
import "./components/ItemListContainer/ItemListContainer.css";
import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section>
        <ItemListContainer text="Bienvenidx a Tienda Moon" />
      </section>
    </div>
  );
}

export default App;
