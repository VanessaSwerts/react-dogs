import { useState } from 'react'

const validateTypes = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido!'
  },
  number : {
    regex: /^\d+$/,
    message: 'Utilize apenas números!'
  }
}

export default function useForm(type) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = (value) => {
    if (validateTypes === false)
      return true
    if (value.length === 0) {
      setError('Os campos não podem ser vazios!')
      return false
    } else if (validateTypes[type] && !validateTypes[type].regex.test(value)) {
      setError(validateTypes[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = ({ target }) => {
    error && validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

