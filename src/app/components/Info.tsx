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

const Info = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'tewairama@proton.me',
      link: 'mailto:tewairama@proton.me',
    },

    {
      label: 'Instagram',
      value: '@BuiltByCrook',
      link: 'https://www.instagram.com/builtbycrook/',
    },

    { label: 'Location', value: 'Christchurch, NZ' },
    { label: 'Available', value: 'For new projects' },
  ]

  const services = [
    'Brand Identity Design',
    'Web Development',
    'UI/UX Design',
    'Creative Direction',
    'Digital Strategy',
    'Visual Identity',
  ]

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      {/* Background Text Animation */}
      <BackgroundText />

      <div className="max-w-4xl mx-auto px-8 py-16 w-full relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-light tracking-wider mb-4">INFO</h1>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Creative designer and developer focused on building meaningful
            digital experiences through thoughtful design and clean code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-6 text-red-400">
              About
            </h2>
            <div className="space-y-4 text-white/70 font-light leading-relaxed">
              <p>
                I am a designer and developer who believes in the power of
                simplicity. Every project starts with understanding the core
                problem and crafting solutions that are both beautiful and
                functional.
              </p>
              <p>
                With over 10 years of experience, I have always been a jack of
                all trades, yet a master at none. I started with rebranding for
                Professional e-sports teams, and than slowly made my way into
                the merchandise stream, to than carry on and take on a more
                career orientated approach.
              </p>
              <p>
                When I am not designing or coding, you will find me exploring
                the many emotions that come with 18 holes of golf, Hunting and
                gathering to put food on my table, otherwise I&apos;ll be diving
                into the deep realm of a nice cold beer.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-6 text-red-400">
              Contact
            </h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex justify-between items-center py-2 border-b border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                >
                  <span className="text-white/50 text-sm font-mono uppercase tracking-wider">
                    {item.label}
                  </span>
                  {item.link ? (
                    <motion.a
                      href={item.link}
                      className="text-white/80 hover:text-white transition-colors font-light"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.value}
                    </motion.a>
                  ) : (
                    <span className="text-white/80 font-light">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-light tracking-wide mb-8 text-red-400 text-center">
            Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                className="p-4 border border-white/10 bg-white/[0.02] rounded-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-white/70 group-hover:text-white/90 transition-colors font-light">
                  {service}
                </span>
                <motion.div
                  className="w-1 h-1 bg-red-400 rounded-full mt-2 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Info
