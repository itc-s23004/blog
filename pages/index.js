import HeroComponent from 'components/hero'
import Container from 'components/container'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

const CustomHero = ({ posts }) => {
  return (
    <Container>
      <HeroComponent
        title='CUBE'
        subtitle='アウトプットしていくサイト'
        imageOn
      />
      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText='More Posts' />
    </Container>
  )
}

export default CustomHero

const getStaticProps = async () => {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts
    }
  }
}
export { getStaticProps }
