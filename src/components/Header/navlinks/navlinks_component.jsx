import { Link } from 'react-router-dom';

import './navlinks_component.scss';
const NavLinks = () => {
    return(
        <div className="NavLinks" >
            <ul>
                <li className='mainlink'><Link className='active home' to='/' >Home</Link></li>
                <li className='mainlink'><Link to='/about' className='about'  >About</Link></li>
                <li className='mainlink'>Who's Coming
                    <ul className='sublinks linkswhoscoming' data-aos="fade-up">
                        <li><Link>Advisory Board</Link></li>
                        <li><Link>Assessment Committee</Link></li>
                        <li><Link>Organizing Committee</Link></li>
                        <li><Link>Technical Committee</Link></li>
                        <li><Link>Speakers</Link></li>
                    </ul>
                </li>
                <li className='mainlink'><Link>Get in Touch</Link></li>
                <li className='Register mainlink'><Link>Submit Paper</Link></li>
            </ul>
        </div>
        
    );
}
export default NavLinks;
