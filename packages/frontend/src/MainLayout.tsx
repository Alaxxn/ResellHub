import { Header } from "./Header.tsx";
import { Outlet } from "react-router";


interface MainLayoutProp {
    lightModeFun : () => void;
    user : string;
    isLogedIn : boolean;
    updateUserName : React.Dispatch<React.SetStateAction<string>>;
    updateLogin : React.Dispatch<React.SetStateAction<boolean>>;
    updateAuth : React.Dispatch<React.SetStateAction<string>>;

}

export function MainLayout(props : MainLayoutProp) {
    return (
        <div>
            <Header
            updateUserName= {props.updateUserName}
            updateLogin = {props.updateLogin}
            updateAuth = {props.updateAuth}
            lightModeFun = {props.lightModeFun} 
            user = {props.user} 
            isLogedIn= {props.isLogedIn}/>
            <Outlet />
        </div>
    );
}