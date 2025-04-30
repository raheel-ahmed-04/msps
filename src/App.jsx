import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import MarketingFunnel from "./components/MarketingFunnel"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />
      <Services />
      <MarketingFunnel />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
