import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
