import { useState, useEffect} from "react";
import {Feed} from "./Feed.tsx";
import { Routes, Route } from "react-router";
import type { IApiPostData } from "../../backend/src/shared/ApiPostData";
import { ValidRoutes } from "../../backend/src/shared/ValidRoutes";
import { MainLayout } from "./MainLayout";
import { UploadPage } from "./UploadPage";
import { LoginPage } from "./LoginPage";
import { ProtectedRoute } from "./ProtectedRoute.tsx";

function App() {

    const [posts, _updatePost] = useState<IApiPostData[]>([]);
    const [lightMode , _changeMode] = useState(false);
    const [user , _setusername] = useState("");
    const [AuthToken, _setAuthToken] = useState("");
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

    const fetchPosts = async () => {
      try {
        const endpoint = `/api/post`
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${AuthToken}`}
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
        if (AuthToken) {
            fetchPosts();
        }
    }, [AuthToken]);

    return (
        <Routes>
        <Route path={ValidRoutes.HOME} element={
            <MainLayout 
                lightModeFun = {updateTheme}
                updateLogin={_setLogin}
                updateUserName = {_setusername}
                updateAuth = {_setAuthToken}
                user={user}
                isLogedIn = {isLogedIn}/>} >
            <Route index element={
                <ProtectedRoute authToken={AuthToken} >
                <Feed 
                    data={posts} 
                    isProfile={false} 
                    user={user}
                    loading={loading} 
                    error={error}/> 
                </ProtectedRoute>} />
            <Route path={ValidRoutes.UPLOAD} element={
                <ProtectedRoute authToken={AuthToken} >
                    <UploadPage addPost={_updatePost} user={user} authToken={AuthToken} />
                </ProtectedRoute>
                } />
            <Route path={ValidRoutes.PROFILE} element={
                <ProtectedRoute authToken={AuthToken} >
                <Feed data={posts} isProfile={true} user={user} loading={loading} error={error}/>
                </ProtectedRoute>} />
            <Route path={ValidRoutes.LOGIN} element={<LoginPage 
            isRegistering={false} 
            updateUser={_setusername}
            updateLogin={_setLogin}
            updateToken = {_setAuthToken}
            />}  />
            <Route path={ValidRoutes.REGISTER} element={
                <LoginPage 
                isRegistering={true} 
                updateUser={_setusername}
                updateLogin={_setLogin}
                updateToken = {_setAuthToken}/>
            }/>
        </Route> 
        </Routes>
    );
}

export default App;
