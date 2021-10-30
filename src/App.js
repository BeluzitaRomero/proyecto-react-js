import "./App.css";
import { Navbar } from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
