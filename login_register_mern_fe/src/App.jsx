
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
