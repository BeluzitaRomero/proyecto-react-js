import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./contexts/CartContext";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
            {/* <button onClick={verContext}>Probar context</button> */}
          </Route>
          <Route exact path="/categoria/:categoriaId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
