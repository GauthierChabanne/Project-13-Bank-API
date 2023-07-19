import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer'

function Routing(){
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default Routing
