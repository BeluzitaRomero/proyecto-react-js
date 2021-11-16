import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <main className="App">
              <ItemListContainer />
              {/* <button onClick={verContext}>Probar context</button> */}
            </main>
          </Route>
          <Route exact path="/categoria/:categoriaId">
            <main className="App">
              <ItemListContainer />
            </main>
          </Route>
          <Route exact path="/item/:itemId">
            <main className="App">
              <ItemDetailContainer />
            </main>
          </Route>
          <Route exact path="/cart">
            <main className="App">
              <Cart />
            </main>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
