import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';

function Routing(){
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  )
}

export default Routing
