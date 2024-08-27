import styles from './styles/OriginButton.module.scss'

export const OriginButton = ({ text, onClick }) => {
  return (
    <button className={styles.button} data-hover={text} onClick={onClick}>
      {text}
    </button>
  )
}
