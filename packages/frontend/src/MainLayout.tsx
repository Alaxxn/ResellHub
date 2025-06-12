import { Header } from "./Header.tsx";
import { Outlet } from "react-router";


interface MainLayoutProp {
    lightModeFun : () => void
}

export function MainLayout(props : MainLayoutProp) {
    return (
        <div>
            <Header lightModeFun = {props.lightModeFun}/>
            <Outlet />
        </div>
    );
}