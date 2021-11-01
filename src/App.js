import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/">
          <main className="App">
            <ItemListContainer />
          </main>
        </Route>
        <Route path="/categoria/:categoriaId">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
