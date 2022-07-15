import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Userslist from './pages/Userslist';
import UserDetail from './pages/UserDetail';

function App() {
  
  return (<>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Userslist />} />
        <Route path="/:user_id" element={<UserDetail />} />
      </Routes>
    </Router>
  </>);
}
export default App;