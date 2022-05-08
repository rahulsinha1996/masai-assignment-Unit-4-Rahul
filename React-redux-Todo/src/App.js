import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './todo/components/Home';
import Login from './todo/components/Login';
import Navbar from './todo/components/Navbar';
import { TodoView } from './todo/components/TodoView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="home" element={<Home/>} />
      <Route path="home/:id" element={<TodoView/>}/>
      </Routes>
    </div>
  );
}

export default App;
