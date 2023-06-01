import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, } from 'react-router-dom';
import { UserLogin, loginFieldsNames } from '../interfaces/user'
import { paths } from '../constants/paths';
import { login } from '../store/features/user';


const Login: React.FC<{ disabled?: boolean }> = ({ disabled }) => {

  const user = useSelector((state: any) => state.user) // TODO implement memoize of reselect if it is needed

  const dispatch = useDispatch()
  const handlerSubmit = useCallback((e: any
  ) => {
    e.preventDefault()
    const valuesForm: UserLogin = loginFieldsNames.reduce((acc: UserLogin, { name }) => {
      acc[name] = e.target.elements[name].value;
      return acc;
    }, {
      username: '',
      password: '',
    })
    dispatch(login(valuesForm))
  }, [dispatch])

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate(paths.userAccount)
    }
  }, [user, navigate])
  return (
    // TODO create component for form element to reuse it on Register page
    <div>
      Login
      <form onSubmit={handlerSubmit}>
        {loginFieldsNames.map(field => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.name}</label>
            <input required disabled={disabled} type="text" name={field.name} id={field.name} {...field.opts} value={user?.[field.name] || null} />
          </div>))}
        <button type="submit">Login</button>
        <NavLink to={paths.register} >Go to Register</NavLink>
      </form>
    </div>
  )
}

export default Login;