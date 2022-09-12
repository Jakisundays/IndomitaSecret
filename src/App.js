import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages';
import Acertijo from './components/pages/acertijo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/secretsociety' element={<Acertijo />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
