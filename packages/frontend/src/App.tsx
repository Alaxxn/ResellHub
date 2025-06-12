import { useState } from "react";
import {Feed} from "./Feed.tsx";
import { Routes, Route } from "react-router";
import { fetchDataFromServer } from "./MockAppData";
import { ValidRoutes } from "../../backend/src/shared/ValidRoutes";
import { MainLayout } from "./MainLayout";
import { UploadPage } from "./UploadPage";
import { LoginPage } from "./LoginPage";

function App() {

    const [posts, _updatePost] = useState(fetchDataFromServer);
    const [lightMode , _changeMode] = useState(false);
    const [user , _setusername] = useState("Alaxxn");

    function updateTheme (){
        if (lightMode){
            document.body.classList.remove("light-mode");
            _changeMode(false);
        }else{
            document.body.classList.add("light-mode");
             _changeMode(true);
        }
    }


    return (
        <Routes>
        <Route path={ValidRoutes.HOME} element={<MainLayout lightModeFun = {updateTheme}/>} >
            <Route index element={<Feed data={posts} isProfile={false} user={user}/>} />
            <Route path={ValidRoutes.UPLOAD} element={<UploadPage/>} />
            <Route path={ValidRoutes.PROFILE} element={<Feed data={posts} isProfile={true} user={user}/>} />
            <Route path={ValidRoutes.LOGIN} element={<LoginPage isRegistering={false}/>}  />
            <Route path={ValidRoutes.REGISTER} element={<LoginPage isRegistering={true}/>} />
        </Route> 
        </Routes>
    );
}

export default App;
