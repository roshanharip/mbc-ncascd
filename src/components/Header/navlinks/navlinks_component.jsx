import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navlinks_component.scss';
const NavLinks = () => {
    const [activeLink, setActiveLink] = useState('home');
    console.log(activeLink);
    const onUpdateActiveLink = (x) => {
        setActiveLink(x);
    }
    return(
        <div className="NavLinks" >
            <ul>
                <li className='mainlink'><Link  to='/' className={activeLink === 'home' ? 'active' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link></li>
                <li className='mainlink'><Link to='/about' className={activeLink === 'about' ? 'active' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} >About</Link></li>
                <li className={`${activeLink === 'whoscoming' ? 'active' : 'navbar-link'} mainlink` } onClick={() => onUpdateActiveLink('whoscoming')}>Who's Coming
                    <ul className='sublinks linkswhoscoming'>
                        <li><Link to='/whoscoming/advisory-board' >Advisory Board</Link></li>
                        <li><Link to='/whoscoming/assessment-committee'>Assessment Committee</Link></li>
                        <li><Link to='/whoscoming/organizing-committee'>Organizing Committee</Link></li>
                        <li><Link to='/whoscoming/technical-committee'>Technical Committee</Link></li>
                        <li><Link to='/whoscoming/speakers'>Speakers</Link></li>
                    </ul>
                </li>
                <li className='mainlink'><Link className={activeLink === 'getintouch' ? 'active' : 'navbar-link'} onClick={() => onUpdateActiveLink('getintouch')} >Get in Touch</Link></li>
                <li className='Register mainlink'><Link >Submit Paper</Link></li>
            </ul>
        </div>
        
    );
}
export default NavLinks;
