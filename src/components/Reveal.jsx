import { motion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 26,
  once = true,
  as = 'div',
  ...props
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
