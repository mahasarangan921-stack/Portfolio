import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-[18px] bg-bg"
        >
          <div className="font-display flex items-center gap-2.5 text-[15px] tracking-[0.3em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulseDot" />
            INITIALIZING PORTFOLIO
          </div>
          <div className="h-[2px] w-[220px] overflow-hidden rounded-full bg-border">
            <motion.span
              className="block h-full bg-gradient-to-r from-teal to-amber"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
