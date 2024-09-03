export const containerVariants = {
  initial: { opacity: 0, y: '200%' },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut', delay: custom * 0.5 },
  }),
}
