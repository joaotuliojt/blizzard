import * as Styled from './style'

import diabloBg from '@/assets/banners_hero/diablo-bg.png'
import diabloThumb from '@/assets/banners_hero/diablo-animation-cover.png'
import diabloGif from '@/assets/banners_hero/diablo-animation.gif'
import diabloLogo from '@/assets/banners_hero/diablo-logo.png'

import hearthstoneBg from '@/assets/banners_hero/hearthstone-bg.png'
import hearthstoneThumb from '@/assets/banners_hero/hearthstone-animation-cover.png'
import hearthstoneGif from '@/assets/banners_hero/hearthstone-animation.gif'
import hearthstoneLogo from '@/assets/banners_hero/hearthstone-logo.png'

import wowBg from '@/assets/banners_hero/wow-bg.png'
import wowThumb from '@/assets/banners_hero/wow-animation-cover.png'
import wowGif from '@/assets/banners_hero/wow-animation.gif'
import wowLogo from '@/assets/banners_hero/wow-logo.png'

import UserIcon from '@/assets/icons/user.svg'
import PlayIcon from '@/assets/icons/play.svg'

import { useEffect, useMemo, useState } from 'react'
import { Slider } from '@/components/Slider'
import { Button } from '@/components/Button'
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse'
import Image, { StaticImageData } from 'next/image'

interface IGames {
  id: string
  background: string
  heading: string
  text: string
  buttonText: string
  logo: StaticImageData
  trailer: {
    gif: StaticImageData
    thumbnail: StaticImageData
  }
}

export function Hero() {
  const games = useMemo<IGames[]>(
    () => [
      {
        id: 'diablo',
        background: diabloBg.src,
        heading: 'Retorna à escuridão com o game Diablo IV',
        text: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        buttonText: 'Jogue agora',
        trailer: {
          gif: diabloGif,
          thumbnail: diabloThumb,
        },
        logo: diabloLogo,
      },
      {
        id: 'hearthstone',
        background: hearthstoneBg.src,
        heading: 'Novo pacote de expansão de Hearthstone',
        text: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
        buttonText: 'Reserve agora na pré-venda',
        trailer: {
          gif: hearthstoneGif,
          thumbnail: hearthstoneThumb,
        },
        logo: hearthstoneLogo,
      },
      {
        id: 'wow',
        background: wowBg.src,
        heading: 'Desbrave as Terras Sombrias em Shadowlands! ',
        text: 'O que jaz além do mundo que você conhece?',
        buttonText: 'Reserve na pré-venda',
        trailer: {
          gif: wowGif,
          thumbnail: wowThumb,
        },
        logo: wowLogo,
      },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null)

  useEffect(() => {
    if (timer) {
      clearTimeout(timer)
    }
    const newTimer = setTimeout(() => {
      if (index + 1 === games.length) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 5000)
    setTimer(newTimer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const handleSelectGame = (id: string) => {
    const gameIndex = games.findIndex((game) => game.id === id)
    if (gameIndex >= 0) {
      setIndex(gameIndex)
    }
  }

  return (
    <Styled.Container>
      <Slider
        gameIdActive={games[index].id}
        handleSelectGame={handleSelectGame}
      />
      {games.map((game, i) => (
        <Styled.GameContent key={game.id} active={i === index}>
          {i === index && <Styled.ProgressBar />}
          <MouseParallaxContainer
            containerStyle={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            useWindowMouseEvents
          >
            <MouseParallaxChild
              factorX={0.02}
              factorY={0.01}
              style={{
                backgroundImage: `url(${game.background})`,
              }}
              className={Styled.Bg()}
            ></MouseParallaxChild>
          </MouseParallaxContainer>

          <Styled.GameContainers>
            <Styled.LeftSide>
              <div>
                <h1>{game.heading}</h1>
                <p>{game.text}</p>
              </div>
              <Button
                leftIcon={<Image src={UserIcon} alt="" />}
                aligment={'left'}
                css={{
                  padding: '1.4rem 3.2rem',
                }}
              >
                {game.buttonText}
              </Button>
            </Styled.LeftSide>
            <Styled.RightSide>
              <Image
                src={game.logo.src}
                width={game.logo.width}
                height={game.logo.height}
                alt=""
                className="logo"
              />

              <Styled.GameTrailerWrapper>
                <p>Assita o trailer</p>
                <Styled.GameTrailer>
                  <Image
                    src={game.trailer.thumbnail.src}
                    width={game.trailer.thumbnail.width}
                    height={game.trailer.thumbnail.height}
                    alt=""
                    className="thumbnail"
                  />
                  <Image
                    src={game.trailer.gif.src}
                    width={game.trailer.gif.width}
                    height={game.trailer.gif.height}
                    alt=""
                    className="gif"
                  />

                  <button aria-label="Assistir trailer">
                    <Image src={PlayIcon} alt="" />
                  </button>
                </Styled.GameTrailer>
              </Styled.GameTrailerWrapper>
            </Styled.RightSide>
          </Styled.GameContainers>
        </Styled.GameContent>
      ))}
    </Styled.Container>
  )
}
