import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CategoryList from "./components/CategoryList/CategoryList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="topBar">
        <Header />
        <Nav />
      </div>

  <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/productos" element={<Main />} />
     <Route path="/categoria/:categoryId" element={<Main />} />
     <Route path="/producto/:id" element={<ItemDetailContainer />} />
     <Route path="/carrito" element={<Cart />} />
     <Route path="/categorias" element={<CategoryList />} />
  </Routes>

      <Footer />
    </>
  );
}

export default App;