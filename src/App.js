
import './App.css';
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Workshops from './components/Workshops/Workshops';
import Contacts from './components/Contact/Contact';
import Events from './components/Events/Events';
import Register from './components/Registrations/Register';


function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/workshops' element={<Workshops/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
