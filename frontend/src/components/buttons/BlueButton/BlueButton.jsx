import styles from './styles/BlueButton.module.scss'

const BlueButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.button_secondary}
      data-hover={text}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default BlueButton
