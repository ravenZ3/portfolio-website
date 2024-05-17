import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import "/styles/fonts.css"
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col mt-20 bg-[#121212] container py-12 px-12 mx-auto">
      <Navbar />
      <HeroSection />
      
    </main>
  )
}
