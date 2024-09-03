import { motion } from 'framer-motion'

const transition = (OgComponent) => {
  const TransitionComponent = (props) => (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <OgComponent {...props} />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )

  TransitionComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || 'Component'})`

  return TransitionComponent
}

export default transition
