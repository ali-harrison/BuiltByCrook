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

const Archive = () => {
  // Archive data with realistic creative projects
  const archiveItems = [
    {
      year: '2024',
      projects: [
        {
          name: 'SOBA Typography Series',
          type: 'Typography Design',
          date: 'Dec 2024',
        },
        {
          name: 'Chromatic Blades Collection',
          type: 'Digital Art',
          date: 'Nov 2024',
        },
        {
          name: 'NT x Ember Collaboration',
          type: 'Illustration',
          date: 'Oct 2024',
        },
        {
          name: 'Synergy BIOMZE Header',
          type: 'Social Media',
          date: 'Sep 2024',
        },
        { name: 'Street Poster Campaign', type: 'Marketing', date: 'Aug 2024' },
        {
          name: 'Retro Mannequin Concept',
          type: 'Poster Design',
          date: 'Jul 2024',
        },
      ],
    },
    {
      year: '2023',
      projects: [
        {
          name: 'Gaming Team Rebrand',
          type: 'Brand Identity',
          date: 'Dec 2023',
        },
        { name: 'Urban Legends Series', type: 'Digital Art', date: 'Oct 2023' },
        {
          name: 'Neon Nights Typography',
          type: 'Typography',
          date: 'Sep 2023',
        },
        {
          name: 'Esports Tournament Graphics',
          type: 'Event Design',
          date: 'Aug 2023',
        },
        {
          name: 'NAYZO Twitter Rebrand',
          type: 'Social Media',
          date: 'Jun 2023',
        },
        {
          name: 'Graffiti Style Headers',
          type: 'Digital Graphics',
          date: 'Apr 2023',
        },
        {
          name: 'Street Culture Zine',
          type: 'Editorial Design',
          date: 'Feb 2023',
        },
      ],
    },
    {
      year: '2022',
      projects: [
        {
          name: 'Underground Collective',
          type: 'Brand Identity',
          date: 'Nov 2022',
        },
        { name: 'Cyberpunk UI Elements', type: 'UI Design', date: 'Sep 2022' },
        { name: 'Gaming Clan Logos', type: 'Logo Design', date: 'Jul 2022' },
        {
          name: 'Street Art Documentation',
          type: 'Photography',
          date: 'May 2022',
        },
        {
          name: 'Digital Graffiti Experiments',
          type: 'Digital Art',
          date: 'Mar 2022',
        },
        {
          name: 'Custom Twitch Overlays',
          type: 'Streaming Graphics',
          date: 'Jan 2022',
        },
      ],
    },
    {
      year: '2021',
      projects: [
        {
          name: 'Naturally Talented Rebrand',
          type: 'Brand Identity',
          date: 'Dec 2021',
        },
        {
          name: 'Adesanya Fight Poster',
          type: 'Sports Graphics',
          date: 'Oct 2021',
        },
        { name: 'Chrome Text Effects', type: 'Typography', date: 'Aug 2021' },
        {
          name: 'Gaming Setup Designs',
          type: 'Environmental',
          date: 'Jun 2021',
        },
        {
          name: 'Discord Server Graphics',
          type: 'Community Design',
          date: 'Apr 2021',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      {/* Background Text Animation */}
      <BackgroundText />

      <div className="max-w-3xl mx-auto px-8 py-16 w-full relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-light tracking-wider mb-4">ARCHIVE</h1>
          <p className="text-white/60 text-lg font-light mx-auto">
            A collection of past projects, experiments, and creative
            explorations. Each piece represents a moment in time and a step in
            the journey.
          </p>
        </motion.div>

        {/* Archive Content */}
        <div className="space-y-12">
          {archiveItems.map((yearGroup, yearIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + yearIndex * 0.1, duration: 0.5 }}
            >
              {/* Year Header */}
              <div className="flex items-center mb-8 justify-center">
                <div className="flex-1 h-[1px] bg-white/10 max-w-20"></div>
                <span className="text-2xl font-mono text-red-400 mx-6">
                  {yearGroup.year}
                </span>
                <div className="flex-1 h-[1px] bg-white/10 max-w-20"></div>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-4">
                {yearGroup.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.name}
                    className="group cursor-pointer border border-white/5 bg-white/[0.02] p-6 rounded-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + yearIndex * 0.1 + projectIndex * 0.05,
                      duration: 0.4,
                    }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-light tracking-wide text-white/90 group-hover:text-white transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-white/50 mt-1 font-mono">
                          {project.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-white/40 font-mono">
                          {project.date}
                        </span>
                        <motion.div
                          className="w-2 h-2 bg-red-400 rounded-full mt-2 ml-auto opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-white/30 text-sm font-mono">— End of Archive —</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Archive
