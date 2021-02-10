import Link from 'next/link'
import Layout from '../components/Layout'

const LoginPage = () => (
    <Layout title="Employee Login">
        <h1>Employee Login</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
)

export default LoginPage
