import { Fragment } from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/header-component";
import './nav-component.scss';
const Nav = () => {
    return(
        <Fragment>
            <div className="Nav">
            <Header />
        </div>
        <Outlet />
        </Fragment>
        
    );

}
export default Nav; 