import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Illustration from '../assets/Login/Illustration.svg'
import styles from '../styles/pages/home.module.scss'
import Input from '../components/Input'
import Button from '../components/SubmitButton'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Transfers</title>
      </Head>

      <main>
        <header>
          <h1>Welcome,</h1>
          <h4>Log in to continue!</h4>
        </header>
        <form>
          <Input placeholder="Email, username" type="email"/>
          <Input placeholder="Password" type="password"/>
          <Button value="Log In" type="submit"/>
        </form>
        <h4>Don't have and account? <Link href="register">Sign up</Link></h4>
      </main>
      <aside>
        <Image src={Illustration} objectFit="contain"/>
      </aside>
    </div>
  )
}

export default Home