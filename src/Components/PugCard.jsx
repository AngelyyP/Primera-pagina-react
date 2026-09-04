import '../App.css'

function PugCard({ emoji, name, fact }) {
  return (
    <article className="pug-card">
      <div className="pug-emoji" role="img" aria-label={name}>
        {emoji}
      </div>
      <h3 className="pug-name">{name}</h3>
      <p className="pug-fact">{fact}</p>
    </article>
  )
}

export default PugCard