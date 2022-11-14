import Intro from '../../components/Body/Intro-Component/intro-component';
import './home-comonent.scss';
import { useEffect, useContext } from 'react';
import { ActiveContext } from '../../context/active-context';
const Home = () => {
    const {setActivePage} = useContext(ActiveContext);
    useEffect(() => {
      setActivePage("home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className='Home'>

            <Intro  />
        </div>
    );
}
export default Home;