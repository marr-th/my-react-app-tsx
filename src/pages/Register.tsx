import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, } from 'react-router-dom';
import { clean, registerUser } from '../store/features/user'
import { User, fieldsNames } from '../interfaces/user'
import { paths } from '../constants/paths';


const Register: React.FC<{ disabled?: boolean }> = ({ disabled }) => {

  const user = useSelector((state: any) => state.user) // TODO implement memoize of reselect if it is needed

  const dispatch = useDispatch()
  const handlerSubmit = useCallback((e: any
  ) => {

    e.preventDefault()

    const valuesForm: User = fieldsNames.reduce((acc: User, { name }) => {
      acc[name] = e.target.elements[name].value;
      return acc;
    }, {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    })
    dispatch(registerUser(valuesForm))
  }, [dispatch])

  const handlerLogout = useCallback((e: any
  ) => dispatch(clean())
    , [dispatch])

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate(paths.userAccount)
    } else if (disabled) {
      navigate(paths.login)

    }
  }, [user, navigate, disabled])
  return (
    // TODO create component for form element to reuse it on login page
    <div>
      Register
      <form onSubmit={handlerSubmit}>
        {fieldsNames.map(field => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.name}</label>
            <input required
              disabled={disabled}
              type="text"
              name={field.name}
              id={field.name}
              {...field.opts}
              value={user?.[field.name] || null}
            />
          </div>))}
        {!disabled ? <>
          <button type="submit">Register</button>
          <NavLink to={paths.login} >Go to login</NavLink>
        </>
          :
          user ? <button type='button' onClick={handlerLogout}>Logout</button> :
            null}

      </form>
    </div>
  )
}

export default Register;