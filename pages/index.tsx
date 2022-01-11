import Head from 'next/head'
import { Card } from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <Card />
      </main>

      <footer className="flex items-center justify-center w-full">
        
      </footer>
    </div>
  )
}
