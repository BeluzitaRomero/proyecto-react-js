import "./App.css";

import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer text="Bienvenidx a Tienda Moon" />
      </main>
    </div>
  );
}

export default App;
