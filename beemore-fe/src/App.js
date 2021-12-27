import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import CreateNewPost from './pages/CreateNewPost'
import PostDetail from './pages/PostDetail'
import request from './api/request'
import { GuestPage, PrivatePage } from './components/RulePage';

export const AuthContext = React.createContext();

function App() {
const [status, setStatus] = React.useState("idle");
const [user, setUser] = React.useState(null);

const fetchUserInfo = async() => {
  const token = localStorage.getItem("token");
  if(!token){
    setStatus("done");
    return;
  }

  try{
    const res = await request({
      url: '/user/me',
      method: 'GET'
    })
    if(res.success){
      setUser(res.data);
      setStatus("done");
    }else{
      setStatus("error");
    }
  }
  catch(err){
    setStatus("error");
  }
}

React.useEffect(()=>{
  fetchUserInfo();
},[]);

if(status ==="idle" || status ==="loading") return <div>Full page loading...</div>;
if(status ==="error") return <div>Error</div>

  return (
    <div className="App">
      <AuthContext.Provider value={{user, setUser, setStatus}}>
        <Routes>
          <Route element={<PrivatePage />}>
            <Route path="/" element={<MainPage/>} />
            <Route path="/newpost" element={<CreateNewPost/>}/>
            <Route path="/posts/:slug" element={<PostDetail/>}/>
          </Route>
          <Route element={<GuestPage />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Route>
        </Routes>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
