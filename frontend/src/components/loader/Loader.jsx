import { motion } from 'framer-motion'
import { Logo } from '../logo/Logo'
import styles from './styles/Loader.module.scss'

const Loader = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
    >
      <Logo isPromo={true} />
    </motion.div>
  )
}

export default Loader
