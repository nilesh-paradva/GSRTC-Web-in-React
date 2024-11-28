import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home';
import GsrtcLogin from './components/pages/gsrtclogin/GsrtcLogin';
import BusPassLogin from './components/pages/buspasslogin/BusPasslogin';
import RescheduleOfjourney from './components/pages/onlineuser/RescheduleOfJourney';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gsrtcLogin' element={<GsrtcLogin />}/>
        <Route path='/busPassLogin' element={<BusPassLogin />}/>
        <Route path='/busPassLogin/:BusPassLogin' element={<BusPassLogin />}/>
        <Route path='/rescheduleOfjourney' element={<RescheduleOfjourney />}/>
      </Routes>
    </>
  )
}

export default App