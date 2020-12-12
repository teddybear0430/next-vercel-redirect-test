import Link from 'next/link'
import Layout from '../../../components/Layout'

const Category = () => (
  <Layout title="カテゴリーのリダイレクトテスト">
    <h1>PHP</h1>
    <p>
      <Link href="/category/php/1">
        <a>php</a>
      </Link>
    </p>
  </Layout>
)

export default Category;
