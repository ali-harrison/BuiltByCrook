'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'TOP', href: '/' },
    { name: 'WORKS', href: '/works' },
    { name: 'ARCHIVE', href: '/archive' },
    { name: 'INFO', href: '/info' },
  ]

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Sidebar - Always visible */}
      <motion.div
        className="fixed left-0 top-0 h-screen w-64 bg-black/50 backdrop-blur-sm border-r border-white/10 p-8 z-50"
        initial={{ x: -205 }} // Show ~20% (51px of 256px)
        animate={{ x: isOpen ? 0 : -205 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Toggle Button - positioned on the visible edge */}
        <motion.button
          onClick={toggleSidebar}
          className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-16 bg-black/50 backdrop-blur-sm border border-white/10 border-l-0 rounded-r-md flex items-center justify-center hover:bg-black/70 transition-colors duration-300 z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="flex flex-col space-y-1"
            animate={isOpen ? 'open' : 'closed'}
          >
            <motion.span
              className="w-4 h-0.5 bg-white block"
              variants={{
                closed: { rotate: 0, x: 0 },
                open: { rotate: 0, x: -2 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-4 h-0.5 bg-white block"
              variants={{
                closed: { rotate: 0, x: 0 },
                open: { rotate: 0, x: 2 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-4 h-0.5 bg-white block"
              variants={{
                closed: { rotate: 0, x: 0 },
                open: { rotate: 0, x: -2 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>

        {/* Backdrop - only when open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleSidebar}
            />
          )}
        </AnimatePresence>
        {/* Brand/Logo */}
        <motion.div
          className="mb-16 border-b border-white/10 pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{ delay: isOpen ? 0.1 : 0, duration: 0.4 }}
        >
          <motion.h1
            className="text-lg font-light tracking-wider text-white/90"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Built By
            <motion.span
              className="block text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent mt-1"
              whileHover={{
                backgroundPosition: '200% center',
              }}
              transition={{ duration: 0.5 }}
            >
              CROOK
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Navigation */}
        <nav className="space-y-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{
                delay: isOpen ? 0.2 + index * 0.1 : 0,
                duration: 0.4,
              }}
            >
              <Link
                href={item.href}
                className="group block relative overflow-hidden"
                onClick={toggleSidebar}
              >
                <motion.div
                  className="flex items-center space-x-3 py-2"
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Number indicator */}
                  <motion.span
                    className="text-xs text-red-400 font-mono w-6"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                  >
                    0{index + 1}
                  </motion.span>

                  {/* Nav item text */}
                  <motion.span
                    className="text-sm font-light tracking-[0.2em] text-white/70 uppercase relative"
                    whileHover={{ color: 'rgba(255,255,255,0.95)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}

                    {/* Underline effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-[1px] bg-red-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </motion.div>

                {/* Side accent line */}
                <motion.div
                  className="absolute left-0 top-0 w-[2px] h-full bg-red-400 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bottom info */}
        <motion.div
          className="absolute bottom-8 left-8 right-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
          transition={{ delay: isOpen ? 0.6 : 0, duration: 0.4 }}
        >
          <div className="text-xs text-white/50 space-y-1">
            <p>BUILT BY CROOK</p>
            <p>REBRANDS</p>
            <p>Web packs</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Sidebar
