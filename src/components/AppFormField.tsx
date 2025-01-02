import {Fragment, HTMLInputTypeAttribute} from 'react'

interface Props {
  id: string
  label: string
  placeholder: string
  type?: HTMLInputTypeAttribute
  errors?: string[]
}

export default function AppFormField({
  id,
  label,
  placeholder,
  type = 'text',
  errors
}: Props) {
  return (
    <Fragment>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {errors && errors?.map((error) => <p key={error}>{error}</p>)}
    </Fragment>
  )
}
