import styles from './styles/ShowMenuButton.module.scss'

export const ShowMenuButton = ({ isOpen, setIsOpen }) => {
  const toggleMenuButton = (evt) => {
    evt.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={styles.menuButton}
      role="button"
      tabIndex="0"
      aria-hidden="true" /* Отключено для accessibility */
      onClick={(e) => toggleMenuButton(e)}
    >
      {isOpen && (
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.9999 3.56569L5.30978 5.87557L5.87547 5.30988L3.56558 3L5.87547 0.690115L5.30978 0.12443L2.9999 2.43431L0.690018 0.124436L0.124332 0.690121L2.43421 3L0.124333 5.30988L0.690018 5.87556L2.9999 3.56569Z"
          />
        </svg>
      )}
    </div>
  )
}
