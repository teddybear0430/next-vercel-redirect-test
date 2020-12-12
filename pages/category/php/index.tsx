import Link from 'next/link'
import Layout from '../../../components/Layout'

const Category = () => (
  <Layout title="カテゴリーのリダイレクトテスト">
    <h1>PHP</h1>
    <p>
      <Link href="/php/1">
        <a>PHP</a>
      </Link>
    </p>
  </Layout>
)

export default Category;
