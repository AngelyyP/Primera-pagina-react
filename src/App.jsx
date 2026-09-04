import matiHero from './assets/Mati.jpeg'
import mati1 from './assets/Mati1.jpeg'
import mati2 from './assets/Mati2.jpeg'
import mati3 from './assets/Mati3.jpeg'
import mati4 from './assets/Mati4.jpeg'
import Banner from './Components/Banner'
import PugCard from './Components/PugCard'
import Footer from './Components/Footer'
import './App.css'

const obras = [
  {
    image: mati1,
    title: 'La mirada que lo sabe todo',
  },
  {
    image: mati2,
    title: 'Sueño eterno en la sala dos',
  },
  {
    image: mati3,
    title: 'La hora de la cena (siempre)',
  },
  {
    image: mati4,
    title: 'La modelo del museo',
  },
]

function Bienvenida() {
  return (
    <section id="center">
      <div className="polaroid">
        <span className="tape" />
        <img src={matiHero} alt="Matilda posando para la foto" />
      </div>
      <h1 className="hero-title">¡Bienvenido al museo de Matilda!</h1>
      <p className="hero-sub">
        Un lugar donde las arrugas son historia y cada ronquido es una obra de
        arte.
      </p>
    </section>
  )
}

function Galeria() {
  return (
    <section aria-label="Colección permanente del museo">
      <p className="gallery-eyebrow">Museo de Matilda · Colección permanente</p>
      <h2>Las obras maestras de Matilda</h2>
      <div className="pug-gallery">
        {obras.map((obra) => (
          <PugCard
            key={obra.title}
            image={obra.image}
            alt="Fotografía de Matilda"
            title={obra.title}
          />
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Bienvenida />
      <Galeria />
      <Banner />
      <Footer />
    </>
  )
}

export default App