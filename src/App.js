import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review'
import { Route, Routes } from 'react-router-dom';
import DeshBord from './components/DeshBord/DeshBord';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Review' element={<Review></Review>}></Route>
        <Route path='/DeshBord' element={<DeshBord></DeshBord>}></Route>
      </Routes>
    </div>
  );
}

export default App;
