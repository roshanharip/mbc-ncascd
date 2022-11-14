import './logo-component.scss';
import LogoImg from '../../../assets/img/logo.png';
const Logo = () =>{
    return(
        <div className='Logo'>
            <img src={LogoImg} alt="" />
        </div>
    );
}
export default Logo;