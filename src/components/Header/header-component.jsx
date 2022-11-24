import NavLinks from "./navlinks/navlinks_component";
import './header-component.scss';
import Logo from "./logo/logo-component";
const Header = () =>{
    return(
        <div className="Header">
            <Logo />
            <NavLinks />
            
        </div>
    );
}
export default Header;