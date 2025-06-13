import home from './icons/home.svg';
import camera from './icons/camera.svg';
import profile from './icons/profile.svg';
import login from './icons/login.svg';
import logout from './icons/logout.svg';
import { Link } from "react-router-dom";
import "./Header.css";


interface MainLayoutProp {
    lightModeFun : () => void;
    user : string;
    isLogedIn : boolean;
    updateUserName : React.Dispatch<React.SetStateAction<string>>;
    updateLogin : React.Dispatch<React.SetStateAction<boolean>>;
    updateAuth : React.Dispatch<React.SetStateAction<string>>;
}

export function Header(props : MainLayoutProp) {
    
    function handleLogOut (){
        props.updateUserName("");
        props.updateLogin(false);
        props.updateAuth("");
    }

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
                {props.isLogedIn ? <p> {props.user} </p>: <p> Profile </p>}
                </Link>
            </li>
            <li className='button'>
                <label >
                    Light Mode <input type="checkbox" onChange={props.lightModeFun}/>
                </label>
            </li>
            {props.isLogedIn ? 
            <li>
                <Link to="/login" onClick={handleLogOut}> 
                <img src={logout} alt=""/>
                <p> Logout </p>
                </Link>
            </li>
            :
            <li>
                <Link to="/login" > 
                <img src={login} alt=""/>
                <p>Login</p>
                </Link>
            </li>
            }
        </ul>

    </nav>
    );
}