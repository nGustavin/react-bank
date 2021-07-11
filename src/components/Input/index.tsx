import { InputHTMLAttributes } from "react"
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({...rest}) => {
  return(
    <input {...rest} className={styles.input}/>
  )
}

export default Input