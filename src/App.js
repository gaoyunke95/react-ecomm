import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/auth/auth.component';


const Shop = () => {
  return (
    <div>
      <h1>this is shop page</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='auth' element={<Authentication/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
