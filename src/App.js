import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Content from './Content';
import Category from './Category';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:id' element={<Content></Content>}></Route>
        <Route path='/category/:cate' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
