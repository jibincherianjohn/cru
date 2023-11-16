
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import View from './Pages/View';
import Update from './Pages/Update';
import Land from './Pages/Land';

function App() {
  return (
    <div className="App">
     <Header></Header>
  <Routes>
 
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/read' element={<View></View>} ></Route>
     <Route path="/edit/:id" element={<Update></Update>}></Route>
  
  </Routes>
    </div>
  );
}

export default App;
