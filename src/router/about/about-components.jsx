import AboutComponent from '../../components/Body/About-Component/about-component';
import { useContext, useEffect } from 'react';
import { ActiveContext } from '../../context/active-context';
import './about-components.scss';
const About = () => {
    const {setActivePage} = useContext(ActiveContext);
    useEffect(() => {
      setActivePage("about");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <div className='About'>
            <AboutComponent/>
        </div>
    );
}
export default About;