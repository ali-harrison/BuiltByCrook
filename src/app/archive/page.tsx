import Sidebar from '../components/Sidebar'
import BackgroundText from '../components/BackgroundText'
import Archive from '../components/Archive'

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Global animated background text */}
      <BackgroundText />

      {/* Navigation sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="ml-64 min-h-screen relative">
        {/* Archive content */}
        <Archive />

        {/* Optional: Add a subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </main>
  )
}
