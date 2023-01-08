import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import {ItemCar} from './components/ItemCar';
import { Footer } from './components/Footer';
import { ItemList } from './components/Novedades/ItemList';
import { FormAlert } from './components/sweetalert/FormAlert';
import { FormR } from './components/reactHookForms/FormR';


function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/carrito' element={<ItemCar/>}/>
            <Route path='/novedades' element={<ItemList/>}/>
            <Route path='/alert' element={<FormAlert/>}/>
            <Route path='/form' element={<FormR/>}/>
          </Routes>
        </BrowserRouter>
          <Footer/>
      </CartContext>
    </>
  );
}

export default App;
