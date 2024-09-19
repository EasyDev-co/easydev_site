const modalsTransition = { duration: 0.8, ease: [0.8, 0, 0.1, 1] }

export const containerVariants = {
  initial: { opacity: 0, y: '200%' },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut', delay: custom * 0.5 },
  }),
}

export const modalVariants = {
  initial: { y: '-99%' },
  animate: () => ({
    y: 0,
    transition: modalsTransition,
  }),
  exit: {
    y: '-99%',
    transition: modalsTransition,
  },
}
