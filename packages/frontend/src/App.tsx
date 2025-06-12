import { useState, useEffect} from "react";
import {Feed} from "./Feed.tsx";
import { Routes, Route } from "react-router";
import type { IApiPostData } from "../../backend/src/shared/ApiPostData";
import { ValidRoutes } from "../../backend/src/shared/ValidRoutes";
import { MainLayout } from "./MainLayout";
import { UploadPage } from "./UploadPage";
import { LoginPage } from "./LoginPage";

function App() {

    const [posts, _updatePost] = useState<IApiPostData[]>([]);
    const [lightMode , _changeMode] = useState(false);
    const [user , _setusername] = useState("");
    const [isLogedIn , _setLogin] = useState(false);
    const [loading, _setLoading] = useState(true);
    const [error, _setError] = useState(false);

    function updateTheme (){
        if (lightMode){
            document.body.classList.remove("light-mode");
            _changeMode(false);
        }else{
            document.body.classList.add("light-mode");
             _changeMode(true);
        }
    }

    const fetchPost = async () => {
      try {
        const endpoint = `/api/post`
        const response = await fetch(endpoint, {
          method: 'GET'
        });
        if (!response.ok) {
          console.log("Error status:", response.status);
          _setError(true);
          _setLoading(false);
        } 
        else{
            const data = await response.json();
            _updatePost(data);
            _setLoading(false);
        } 
      } catch (err) {
        console.error("Fetch failed:", err);
        _setError(true);
        _setLoading(false);
      }
    };

    useEffect(() => {
        fetchPost();
    }, []);


    return (
        <Routes>
        <Route path={ValidRoutes.HOME} element={
            <MainLayout 
                lightModeFun = {updateTheme}
                updateLogin={_setLogin}
                updateUserName = {_setusername}
                user={user}
                isLogedIn = {isLogedIn}/>} >
            <Route index element={
                <Feed 
                    data={posts} 
                    isProfile={false} 
                    user={user}
                    loading={loading} 
                    error={error}/>} />
            <Route path={ValidRoutes.UPLOAD} element={
                <UploadPage addPost={_updatePost} user={user} />} />
            <Route path={ValidRoutes.PROFILE} element={
                <Feed data={posts} isProfile={true} user={user} loading={loading} error={error}/>} />
            <Route path={ValidRoutes.LOGIN} element={<LoginPage 
            isRegistering={false} 
            updateUser={_setusername}
            updateLogin={_setLogin}
            />}  />
            <Route path={ValidRoutes.REGISTER} element={<LoginPage 
            isRegistering={true} 
            updateUser={_setusername}
            updateLogin={_setLogin}/>} />
        </Route> 
        </Routes>
    );
}

export default App;
