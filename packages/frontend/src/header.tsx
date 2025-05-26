import "./index.css";
import home from './icons/home.svg';
import camera from './icons/camera.svg';
import profile from './icons/profile.svg';
//import { Link } from "react-router-dom";


export function Header() {
    return (
    <nav className="navigation">
        <ul >
            <li >
                <a href="index.html">
                <img src={home}/>
                <p>Home</p>
                </a>
            </li>
            <li>
                <a href="post.html">
                <img src={camera}/>
                <p>Post</p>
                </a>
            </li>
            <li>
                <a href="profile.html">
                <img src={profile}/>
                <p>Profile</p>
                </a>
            </li>
        </ul>
    </nav>
    );
}