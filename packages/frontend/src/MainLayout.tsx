import { Header } from "./Header.tsx";
import { Outlet } from "react-router";


interface MainLayoutProp {
    lightModeFun : () => void;
    user : string;
    isLogedIn : boolean;
}

export function MainLayout(props : MainLayoutProp) {
    return (
        <div>
            <Header 
            lightModeFun = {props.lightModeFun} 
            user = {props.user} 
            isLogedIn= {props.isLogedIn}/>
            <Outlet />
        </div>
    );
}