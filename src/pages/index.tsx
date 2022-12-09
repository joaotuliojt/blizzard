import { Download } from '@/components/containers/Download'
import { Games } from '@/components/containers/Games'
import { Hero } from '@/components/containers/Hero'
import { Header } from '@/components/Header'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export interface IGames {
  name: string
  category: string
  image: string
  logo: string
}

interface HomeProps {
  games: IGames[]
}

export default function Home({ games }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Blizzard</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <Games games={games} />
        <Download />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.brchallenges.com/api/blizzard/games'
  )
  const data: IGames[] = await response.json()

  return {
    props: {
      games: data,
    },
  }
}
