'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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

const FeaturedWork = () => {
  // Your actual project data
  const projects = [
    {
      id: 1,
      title: 'SOBA TYPOGRAPHY',
      subtitle: 'sick of being average',
      category: 'Chromatic Blades: SOBA',
      number: '01',
      image: '/images/portfolio/work-1.webp',
      description: 'Street-born. Chrome-forged. Never settling for average.',
    },
    {
      id: 2,
      title: 'SOBA STREET',
      subtitle: 'Street poster',
      category: 'Marketing',
      number: '02',
      image: '/images/portfolio/work-2.webp',
      description: 'Street poster for SOBA',
    },
    {
      id: 3,
      title: 'NT x Ember',
      subtitle: 'Illustration for NT x Ember ',
      category: 'Hand Drawn Illustration',
      number: '03',
      image: '/images/portfolio/work-3.webp',
      description: 'The Combination of 2 former up and coming Gaming Teams',
    },
    {
      id: 4,
      title: 'NT',
      subtitle: 'Header',
      category: 'Twitter Header',
      number: '04',
      image: '/images/portfolio/work-4.webp',
      description: 'Grime piece for Naturally Talented',
    },
    {
      id: 5,
      title: 'Nayzo',
      subtitle: 'Twitter Header',
      category: 'Header',
      number: '05',
      image: '/images/portfolio/work-5.webp',
      description: 'Commisioned twitter header for: NAYZO',
    },
    {
      id: 6,
      title: 'BIOMZE',
      subtitle: 'Twitter Header',
      category: 'Header',
      number: '06',
      image: '/images/portfolio/work-6.webp',
      description: 'Comissioned twitter header for: Synergy BIOMZE',
    },
    {
      id: 7,
      title: 'Retro Mannequin',
      subtitle: 'Poster concept',
      category: 'Poster',
      number: '07',
      image: '/images/portfolio/work-7.webp',
      description: 'Poster concept',
    },
    {
      id: 8,
      title: 'Adesanya Visual',
      subtitle: '118-4',
      category: 'Poster',
      number: '08',
      image: '/images/portfolio/work-8.webp',
      description: 'Inspired piece',
    },
  ]

  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center relative">
      {/* Background Text Animation */}
      <BackgroundText />

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-light tracking-wider mb-2">WORKS</h1>
          <p className="text-white/50 text-sm font-mono">
            {projects.length} ITEMS
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 h-[80vh]">
          {/* Project List - Left Side */}
          <div className="col-span-3">
            <div className="h-full overflow-y-auto scrollbar-hide pr-4">
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={`cursor-pointer group transition-all duration-300 p-4 rounded-lg border ${
                      selectedProject.id === project.id
                        ? 'bg-red-900/20 border-red-400 text-white'
                        : 'border-white/10 hover:border-white/30 text-white/70 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* List Item Content */}
                    <div className="flex items-center gap-3">
                      {/* Thumbnail */}
                      <div className="w-12 h-8 rounded overflow-hidden flex-shrink-0 bg-gray-700">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onLoad={(e) => {
                            console.log('Thumbnail loaded:', project.image)
                          }}
                          onError={(e) => {
                            console.log(
                              'Thumbnail failed to load:',
                              project.image
                            )
                            const target = e.target
                            target.style.display = 'none'
                            target.parentElement.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-red-900/50 to-purple-900/50 flex items-center justify-center text-xs text-white/50">
                                ${project.number}
                              </div>
                            `
                          }}
                        />
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-red-400">
                            #{project.number}
                          </span>
                          <span className="text-xs font-mono text-white/50">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="font-light text-sm leading-tight mb-1 truncate">
                          {project.title}
                        </h3>

                        <p className="text-xs text-white/50 truncate">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Showcase - Right Side */}
          <div className="col-span-9">
            <motion.div
              key={selectedProject.id}
              className="h-full bg-gray-900/50 rounded-lg overflow-hidden border border-white/10 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Large Project Display */}
              <div className="h-3/4 relative overflow-hidden">
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onLoad={(e) => {
                      console.log(
                        'Image loaded successfully:',
                        selectedProject.image
                      )
                    }}
                    onError={(e) => {
                      console.log(
                        'Image failed to load:',
                        selectedProject.image
                      )
                      const target = e.target
                      target.style.display = 'none'
                      const fallback = target.nextElementSibling
                      if (fallback) {
                        fallback.style.display = 'block'
                        fallback.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-red-900/50 to-purple-900/50 flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-6xl font-mono text-white/30 mb-4">#${selectedProject.number}</div>
                              <div class="text-white/50">Image not found</div>
                              <div class="text-xs text-white/30 mt-2">Check: ${selectedProject.image}</div>
                            </div>
                          </div>
                        `
                      }
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div className="absolute inset-0 hidden"></div>
                </div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <span className="text-red-400 font-mono text-sm tracking-wider">
                        {selectedProject.category}
                      </span>
                    </motion.div>

                    <motion.h2
                      className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {selectedProject.title}
                    </motion.h2>

                    <motion.p
                      className="text-xl font-light text-white/90 drop-shadow-md"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {selectedProject.subtitle}
                    </motion.p>
                  </div>
                </div>

                {/* Project Number - Large Background */}
                <div className="absolute top-6 right-6">
                  <span className="text-8xl font-mono text-white/10 drop-shadow-lg">
                    #{selectedProject.number}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-1 bg-red-400 opacity-70 drop-shadow-md"></div>
                </div>
              </div>

              {/* Project Details Footer */}
              <motion.div
                className="h-1/4 p-6 flex items-center bg-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex-1">
                  <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWork
