import { Routes, Route } from 'react-router';
import ParticleConfig from './config/particle-config/particle-config';
import Nav from './router/Navigation-router/nav-component';
import Home from './router/home/home-comonent';
import './App.scss';
import About from "./router/about/about-components";
import AdvisoryBoard from './router/whoscoming/advisoryboard/advisoryboard-component';
import AssessmentC from './router/whoscoming/assessmentc/assessmentc-component';
import OrganizingC from './router/whoscoming/organizingc/organizingc-component';
import TechnicalC from './router/whoscoming/technicalc/technicalc-component';
import Speakers from './router/whoscoming/speaker/speaker-component';
const App = () =>{
  return (
    <div className="App">
      <ParticleConfig />
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
            <Route path='/whoscoming/advisory-board' element={<AdvisoryBoard />} />
            <Route path='/whoscoming/assessment-committee' element={<AssessmentC />} />
            <Route path='/whoscoming/organizing-committee' element={<OrganizingC />} />
            <Route path='/whoscoming/technical-committee' element={<TechnicalC />} />
            <Route path='/whoscoming/speakers' element={<Speakers />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
