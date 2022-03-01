import Login from './auth/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './container/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
