import { motion } from 'framer-motion'
import styles from './styles/ErrorMessage.module.scss'
import { containerVariants } from '../../animations/variants'

const ErrorMessage = ({ error }) => {
  return (
    <motion.div
      className={styles.error}
      variants={containerVariants}
      custom={3}
      initial="initial"
      animate="animate"
    >
      Что-то пошло не так, попробуйте повторить позже. <br />Ошибка: {error}
    </motion.div>
  )
}

export default ErrorMessage
