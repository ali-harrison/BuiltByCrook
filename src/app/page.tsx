import Sidebar from './components/Sidebar'

import LandingHero from './components/LandingHero'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Global animated background text */}

      {/* Navigation sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="ml-64 min-h-screen relative">
        {/* Simple landing hero */}
        <LandingHero />
      </div>
    </main>
  )
}
