import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Series from './Components/Series';
import Movies from './Components/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/series' element={<Series/>} />
        <Route path='/movies' element={<Movies/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
