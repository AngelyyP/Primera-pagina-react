import '../App.css'

function Banner({ name }) {
  return (
    <section className="sticker-card">
      <h2>¡Te damos la bienvenida, {name}! 🐶</h2>
      <p className="hero-sub">
        Aquí los ronquidos son sinfonías y las arrugas, obras de arte.
      </p>
      <div className="sticker-row">
        <div className="sticker">🐶</div>
        <div className="sticker">💖</div>
        <div className="sticker">☕</div>
        <div className="sticker">😴</div>
      </div>
    </section>
  )
}

export default Banner