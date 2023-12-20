import HeroComponent from 'components/hero'
import Container from 'components/container'

const CustomHero = () => {
  return (
    <Container>
      <HeroComponent
        title='CUBE'
        subtitle='アウトプットしていくサイト'
        imageOn
      />
    </Container>
  )
}

export default CustomHero
