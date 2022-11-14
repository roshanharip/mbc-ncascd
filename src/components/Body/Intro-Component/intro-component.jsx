import CalendarSvg from '../../svgs/calendar/calendar-component';
import LocationSvg from '../../svgs/location/location-component';
import './intro-component.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Intro= () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className='Intro'>
            <section className='introContent'>
                <div className='introTitle'>
                    <h1 >
                    National Conference on Advance Computing and Data science
                    </h1>
                </div>
                <div className='introSvgs'>
                    <CalendarSvg />
                    <LocationSvg />
                </div>
            </section>
        </div>
    );
}
export default Intro;