import {useFormStatus} from 'react-dom'

interface Props {
  label: string
  type: 'submit' | 'reset'
  disabled?: boolean
}

export default function AppSubmitButton({label, type, disabled}: Props) {
  const {pending} = useFormStatus()

  return (
    <button
      disabled={disabled || pending}
      type={type}
    >
      {label}
    </button>
  )
}
