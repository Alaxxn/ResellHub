import { useState } from "react";
import {Feed} from "./Feed.tsx";
import { Routes, Route } from "react-router";
import { fetchDataFromServer } from "./MockAppData";
import { ValidRoutes } from "../../backend/src/shared/ValidRoutes";
import { MainLayout } from "./MainLayout";
import { UploadPage } from "./UploadPage";

function App() {

    const [posts, _updatePost] = useState(fetchDataFromServer);
    const [lightMode , _changeMode] = useState(false);

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
            <Route index element={<Feed data={posts}/>} />
            <Route path={ValidRoutes.UPLOAD} element={<UploadPage/>} />
            <Route path={ValidRoutes.PROFILE} element={<Feed data={posts}/>} />
            <Route path={ValidRoutes.LOGIN} element={<div> TODO </div>} />
            <Route path={ValidRoutes.REGISTER} element={<div> TODO </div>} />
        </Route> 
        </Routes>
    );
}

export default App;
