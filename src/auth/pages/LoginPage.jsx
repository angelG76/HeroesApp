import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
export const LoginPage = () => {
  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Anacleto González')
    navigate(lastPath, { replace: true })
  }
  return (
    <div className="p-4 mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn-default mt-5" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
