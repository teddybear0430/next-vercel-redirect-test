import Link from 'next/link'
import Layout from '../../../components/Layout'

const Category = () => (
  <Layout title="カテゴリーのリダイレクトテスト">
    <h1>JavaScript</h1>
    <p>
      <Link href="/javascript/1">
        <a>JavaScript</a>
      </Link>
    </p>
  </Layout>
)

export default Category;
