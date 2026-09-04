import pugPhoto from './assets/Mati.jpeg'
import Banner from './Components/Banner'
import PugCard from './Components/PugCard'
import Footer from './Components/Footer'
import './App.css'

const pugs = [
  {
    emoji: '🐶',
    name: 'Mati',
    fact: 'La reina de la casa. Ruge como un campeón y pide mimos con la mirada.',
  },
  {
    emoji: '🐕',
    name: 'Roscoe',
    fact: 'Ronca a 90 decibelios: su sonido favorito del día es su propio ronquido.',
  },
  {
    emoji: '🐾',
    name: 'Waffle',
    fact: 'Come a toda velocidad, como si alguien fuera a robarle el croquete.',
  },
  {
    emoji: '🦴',
    name: 'Nala',
    fact: 'Duerme 14 horas al día; las otras 10 las usa para planear la siesta.',
  },
]

function Bienvenida() {
  return (
    <section id="center">
      <div className="polaroid">
        <span className="tape" />
        <img src={pugPhoto} alt="Pug posando para la foto" />
      </div>
      <h1 className="hero-title">¡Bienvenido al Mundo Pug!</h1>
      <p className="hero-sub">
        Un lugar donde las arrugas son belleza, la cola es un espiral de alegría
        y la comida nunca está a salvo.
      </p>
    </section>
  )
}

function Galeria() {
  return (
    <section aria-label="Galería de pugs">
      <h2>Nuestros pugs favoritos</h2>
      <div className="pug-gallery">
        {pugs.map((pug) => (
          <PugCard
            key={pug.name}
            emoji={pug.emoji}
            name={pug.name}
            fact={pug.fact}
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
      <Banner name="Angely" />
      <Footer />
    </>
  )
}

export default App