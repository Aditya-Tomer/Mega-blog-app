import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function AuthLayout({children, authentication = true}) {
    const nevigate = useNavigate()
    const [loader, setLoder] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            nevigate('/login')
        } else if(!authentication && authStatus !== authentication){
            nevigate('/')
        } else {
            nevigate('/signup')
        }
        setLoder(false)
    },[authStatus, nevigate, authentication ])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout