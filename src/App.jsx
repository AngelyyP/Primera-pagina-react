import matiHero from './assets/Mati.jpeg'
import mati1 from './assets/Mati1.jpeg'
import mati2 from './assets/Mati2.jpeg'
import mati3 from './assets/Mati3.jpeg'
import Banner from './Components/Banner'
import PugCard from './Components/PugCard'
import Footer from './Components/Footer'
import './App.css'

const obras = [
  {
    image: mati1,
    title: 'La sonrisa más linda',
  },
  {
    image: mati2,
    title: 'Sueño despues del pollito',
  },
  {
    image: mati3,
    title: 'Con mi hermanita que más amo',
  },

]

function Bienvenida() {
  return (
    <section id="center">
      <div className="hero-museo">
        <div className="hero-text">
          <h1 className="hero-title">¡Bienvenido al museo de Matilda!</h1>
          <p className="hero-sub">
            Un lugar donde las arrugas son historia y cada ronquido es una obra
            de arte.
          </p>
        </div>
        <div className="polaroid">
          <span className="tape" />
          <img src={matiHero} alt="Matilda posando para la foto" />
        </div>
      </div>
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