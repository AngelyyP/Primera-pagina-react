import '../App.css'

function PugCard({ image, alt, title }) {
  return (
    <article className="pug-card">
      <div className="pug-photo-frame">
        <img className="pug-photo" src={image} alt={alt} />
      </div>
      <h3 className="pug-name">{title}</h3>
    </article>
  )
}

export default PugCard