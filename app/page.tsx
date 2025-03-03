import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import Specials from "./components/Specials"
import IcedDrinks from "./components/IcedDrinks"
import Benefits from "./components/Benefits"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#EFE7DD] pt-16">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Specials />
      <IcedDrinks />
      <Benefits />
      <ContactForm />
      <Footer />
    </main>
  )
}

