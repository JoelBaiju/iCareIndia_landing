import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import TermsConditions from './pages/Terms&Conditions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/return' element={<ReturnPolicy/>} />
        <Route path='/terms' element={<TermsConditions/>} />
        <Route path='privacy' element={<PrivacyPolicy/>} />
      </Routes>
    </Router> 
   
    </div>
  );
}

export default App;
