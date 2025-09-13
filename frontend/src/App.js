import './App.css';
import Navbar from '../src/composants/Navbar/Navbar'
import Accueil from '../src/Pages/Accueil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Accueil/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
