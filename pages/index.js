import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles, username }) {
  // console.log(username)
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

Home.layout = 'L1';

export const getStaticProps = async () => {
  const res = await fetch(`${ server }/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASS,
    },
  }
}
