import { useEffect, useReducer, useState } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = () => {
    return JSON.parse(sessionStorage.getItem('user')) || {logged: false};
}

export default function AuthProvider({children}) {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
    if(user.user){
      sessionStorage.setItem('token', user.user.token);
    }
    const existe = true
    //InfoUsers.roleExiste('ROLE_ADMIN');
    setIsAdmin(existe);
  }, [user])

  return (
    <AuthContext.Provider value = { {user, dispatch, isAdmin} }>
        {children}
    </AuthContext.Provider>
  )
}