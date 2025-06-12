import home from './icons/home.svg';
import camera from './icons/camera.svg';
import profile from './icons/profile.svg';
import login from './icons/login.svg';
import { Link } from "react-router-dom";
import "./Header.css";


interface MainLayoutProp {
    lightModeFun : () => void
}

export function Header(props : MainLayoutProp) {
    return (
    <nav className="navigation">
        <ul>
            <li >
                <Link to="/">
                <img src={home} alt=""/>
                <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to="/upload">
                <img src={camera} alt=""/>
                <p>Post</p>
                </Link>
            </li>
            <li>
                <Link to="/profile">
                <img src={profile} alt=""/>
                <p>Profile</p>
                </Link>
            </li>
            <li className='button'>
                <label >
                    Light Mode <input type="checkbox" onChange={props.lightModeFun}/>
                </label>
            </li>
            <li>
                <Link to="/login"> 
                <img src={login} alt=""/>
                <p>Login</p>
                </Link>
            </li>
        </ul>

    </nav>
    );
}