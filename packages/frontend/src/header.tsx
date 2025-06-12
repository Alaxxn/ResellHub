import home from './icons/home.svg';
import camera from './icons/camera.svg';
import profile from './icons/profile.svg';
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
        </ul>

        <div className='button'>
            <label >
                Light Mode <input type="checkbox" onChange={props.lightModeFun}/>
            </label>
        </div>
    </nav>
    );
}