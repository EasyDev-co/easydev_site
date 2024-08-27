import styles from './styles/Arrow.module.scss'

const Arrow = () => {
  return (
    <div className={styles.arrow}>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect rx="10" />
        <path
          className={styles.arrow_default}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.79963 7.10919L11.5691 10.8787L11.5691 7.45442L12.5456 7.45442V12.5456H7.45441L7.45441 11.5692L10.8787 11.5692L7.10919 7.79964L7.79963 7.10919Z"
        />
        <path
          className={styles.arrow_hover}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.79963 7.10919L11.5691 10.8787L11.5691 7.45442L12.5456 7.45442V12.5456H7.45441L7.45441 11.5692L10.8787 11.5692L7.10919 7.79964L7.79963 7.10919Z"
        />
      </svg>
    </div>
  )
}

export default Arrow
