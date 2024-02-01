import { useNavigate } from 'react-router-dom'
export const LoginPage = () => {
  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/marvel', { replace: true })
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
