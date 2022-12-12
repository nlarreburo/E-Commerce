import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import {ItemDetailContainer} from './components/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
