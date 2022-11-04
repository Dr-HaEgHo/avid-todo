import './App.css';
import './mediaQueries.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/:route' element={<Home/>} />
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
