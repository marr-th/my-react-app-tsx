import React, { useCallback } from 'react'
import { User, fieldsNames } from '../interfaces/user'


 const Register: React.FC<{disabled?: boolean}> = ({disabled}) => {
  const handlerSubmit = useCallback((e: any
    ) => {
    e.preventDefault()
    const valuesForm: User = fieldsNames.reduce((acc: User, {name}) => {
      acc[name] = e.target.elements[name].value;
      return acc;
    }, {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    })
    return valuesForm;
  }, [])

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        {fieldsNames.map(field => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.name}</label>
            <input required disabled={disabled} type="text"  name={field.name} id={field.name} {...field.opts} />
          </div>))}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;