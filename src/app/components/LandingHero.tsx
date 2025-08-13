'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsExiting(true)
          setTimeout(() => {
            onLoadingComplete?.()
          }, 800)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl font-light tracking-wider text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          BUILT BY CROOK
        </motion.h1>

        <motion.div
          className="text-2xl font-mono text-red-400"
          key={progress}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {progress.toString().padStart(2, '0')}%
        </motion.div>
      </div>
    </motion.div>
  )
}

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

const LandingHero = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <BackgroundText />

          <div className="relative z-10">
            <motion.div
              className="absolute top-1/2 left-24 transform -translate-y-1/2"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="w-[420px] h-64 bg-gray-800 rounded-lg overflow-hidden border border-white/20 group cursor-pointer shadow-2xl">
                <img
                  src="/images/portfolio/work-1.webp"
                  alt="SOBA TYPOGRAPHY"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                        <span class="text-white/50 text-sm">SOBA TYPOGRAPHY</span>
                      </div>
                    `
                  }}
                />
              </div>
              <p className="text-sm text-white/60 mt-4 tracking-wider font-mono">
                SOBA TYPOGRAPHY~LEGENDARY~
              </p>
            </motion.div>

            <motion.div
              className="absolute top-20 right-32"
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="w-72 h-44 bg-white rounded-lg overflow-hidden border border-white/20 group cursor-pointer shadow-xl">
                <img
                  src="/images/portfolio/work-3.webp"
                  alt="NT x Ember Illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-red-900/50 to-orange-900/50 flex items-center justify-center">
                        <span class="text-white/50 text-xs">NT x Ember</span>
                      </div>
                    `
                  }}
                />
              </div>
              <p className="text-xs text-white/50 mt-3 tracking-wider font-mono">
                NT x Ember Illustration
              </p>
            </motion.div>

            <motion.div
              className="absolute bottom-32 right-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <div className="bg-black/80 backdrop-blur-sm p-6 rounded border border-white/15 w-80">
                <h3 className="text-sm text-red-400 font-mono mb-3 tracking-wide">
                  // Visual Storyteller
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-mono tracking-wide">
                  Crafting bold visuals at the intersection
                  <br />
                  of street culture and digital innovation.
                  <br />
                  <br />
                  <span className="text-white/50">Ready to explore?</span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-16 left-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <p className="text-xs text-white/70 mb-1 tracking-wider">
                Built By
              </p>
              <h2 className="text-2xl font-medium">
                CRO
                <span className="bg-gradient-to-r from-red-400 to-rose-600 bg-clip-text text-transparent">
                  O
                </span>
                K
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-sm border-t border-white/10 flex items-center px-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex space-x-8 text-xs text-white/50 tracking-wider">
              <span>PRODUCTION</span>
              <span>CROOK</span>
              <span>LOGO</span>
              <span>MOVIE</span>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default LandingHero
