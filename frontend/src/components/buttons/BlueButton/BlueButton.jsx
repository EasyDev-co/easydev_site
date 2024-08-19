import styles from './styles/BlueButton.module.scss'

const BlueButton = ({ text }) => {
  return <button className={styles.blue__button}>{text}</button>
}

export default BlueButton
