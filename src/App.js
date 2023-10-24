import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component'
import CheckOut from "./routes/checkout/checkout.component";



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />}/>
          <Route path='shop/*' element={<Shop />}/>
          <Route path='auth' element={<Authentication/>}/>
            <Route path='checkout' element={<CheckOut/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
