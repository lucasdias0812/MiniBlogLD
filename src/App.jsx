import './App.css'
import { BrowserRouter, Routes, Route, navigate } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { useNavigate } from 'react-router-dom';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import {AuthProvider } from './contexts/AuthContexts';

import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { useAuthValue } from './contexts/AuthContexts';
import CreatePost from './pages/Dashboards/CreatePost/CreatePost';
import Dashboard from './pages/Dashboards/dashboard';

function App(){
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

 

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    });
  }, [auth]);

  if (loadingUser){
    return <p>Carregando...</p>
  }

  
    return(
      <div className="App">
        <AuthProvider value={{user}}>
        <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/posts/create' element={<CreatePost />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
        </AuthProvider>
      </div>
    );  
}
export default App;