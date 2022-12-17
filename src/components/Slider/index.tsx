import { forwardRef, useMemo } from 'react'
import { Container, Game } from './style'
import Image from 'next/image'

import Diablo from '@/assets/game_icons/diablo_iv.png'
import Hearthstone from '@/assets/game_icons/hearthstone.png'
import Wow from '@/assets/game_icons/wow.png'
import DiabloImmortal from '@/assets/game_icons/diablo_immortal.png'
import Starcraft from '@/assets/game_icons/starcraft_2.png'

interface IGames {
  id: string
  image: string
}

interface SliderProps {
  gameIdActive: string
  handleSelectGame: (id: string) => void
}

const Slider = forwardRef<null, SliderProps>(
  ({ gameIdActive, handleSelectGame }, ref) => {
    const games = useMemo<IGames[]>(
      () => [
        {
          id: 'diablo',
          image: Diablo.src,
        },
        {
          id: 'hearthstone',
          image: Hearthstone.src,
        },
        {
          id: 'wow',
          image: Wow.src,
        },
        {
          id: 'diablo_immortal',
          image: DiabloImmortal.src,
        },
        {
          id: 'starcraft',
          image: Starcraft.src,
        },
      ],
      []
    )

    return (
      <Container ref={ref}>
        {games.map((game) => (
          <Game
            aria-label={`Mudar para ${game.id}`}
            key={game.id}
            active={game.id === gameIdActive}
            onClick={() => handleSelectGame(game.id)}
          >
            <Image
              src={game.image}
              width="48"
              height="48"
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Game>
        ))}
      </Container>
    )
  }
)

Slider.displayName = 'Slider'
export { Slider }
