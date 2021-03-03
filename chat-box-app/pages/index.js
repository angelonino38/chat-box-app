import Head from 'next/head'
import dynamic from 'next/dynamic'


const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Angelo's Chat Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Angelo's Chat Demo</h1>
        <AblyChatComponent />
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
        ...       
      `}</style>

      <style jsx global>{`
        ...        
      `}</style>
    </div>
  )
}