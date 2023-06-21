
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Register from './page/Register';
import Dashboard from './page/Dashboard';
import Home from './page/Home';




function App() {
  return (
   <BrowserRouter>

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
