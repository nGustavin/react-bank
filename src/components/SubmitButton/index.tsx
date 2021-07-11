import { ButtonHTMLAttributes } from "react"
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const Button: React.FC<ButtonProps> = ({value, ...rest}) => {
  return(
    <button {...rest} className={styles.button}>{value}</button>
  )
}

export default Button