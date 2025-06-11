import home from './icons/home.svg';
import camera from './icons/camera.svg';
import profile from './icons/profile.svg';
//import { Link } from "react-router-dom";


export function Header() {
    return (
    <nav className="navigation">
        <ul>
            <li >
                <a href="index.html">
                <img src={home} alt=""/>
                <p>Home</p>
                </a>
            </li>
            <li>
                <a href="post.html">
                <img src={camera} alt=""/>
                <p>Post</p>
                </a>
            </li>
            <li>
                <a href="profile.html">
                <img src={profile} alt=""/>
                <p>Profile</p>
                </a>
            </li>
        </ul>
    </nav>
    );
}