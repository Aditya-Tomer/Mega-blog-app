import { useState, useEffect } from 'react'
import config from './config/config'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Footer from './components/Footer/Footer'
import Hearder from './components/Header/Header'

function App() {
  const [loading, setLoading]  = useState(true);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.log("Login error", error)
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className = "min-h-screen flex flex-wrap content-between bg-gray-400" >
      <div>
        <Hearder/>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
