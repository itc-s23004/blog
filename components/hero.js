const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <main>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {imageOn && <figure> </figure>}
      </div>
    </main>
  )
}
export default Hero
