'use client'

import { motion } from 'framer-motion'

const BackgroundText = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main scrolling text */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <h1
            className="text-[20rem] font-black text-white/5 select-none leading-none mr-8"
            style={{
              textShadow: '0 0 50px rgba(255,255,255,0.1)',
              WebkitTextStroke: '1px rgba(255,255,255,0.05)',
            }}
          >
            Built • By • Crook
          </h1>
        </motion.div>
      </div>

      {/* Counter scrolling text */}
      <div className="absolute top-3/4 transform -translate-y-1/2 w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <h2
            className="text-[8rem] font-light text-white/3 select-none leading-none mr-8"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.05)',
            }}
          >
            ANIMATIONS • VISUALS • GRAPHICS
          </h2>
        </motion.div>
      </div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-20 right-20"
        animate={{
          rotate: [0, 5, 0, -5, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="text-6xl font-light text-white/5">GFX</span>
      </motion.div>
    </div>
  )
}

export default BackgroundText
