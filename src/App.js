import { Routes, Route } from 'react-router';
import ParticleConfig from './config/particle-config/particle-config';
import Nav from './router/Navigation-router/nav-component';
import Home from './router/home/home-comonent';
import './App.scss';
import About from "./router/about/about-components";
const App = () =>{
  return (
    <div className="App">
      <ParticleConfig />
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
