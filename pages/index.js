import Head from 'next/head'

// containers
import { Blog, Features, Footer, GPT3, Header, Possibility } from '../containers'

// components
import { Navbar, CTA, Brand } from '../components'

const Home = () => {
  return <>
    <Head>
      <title>MODERN WEB</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  </>
}

export default Home