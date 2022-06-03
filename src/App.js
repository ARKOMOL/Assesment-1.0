import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
     
      <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
          }/>
          <Route path='login' element={<Login/>}/>
      </Routes>


    </div>
  );
}

export default App;
