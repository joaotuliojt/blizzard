import { IGames } from 'src/pages'
import { Container } from './style'

interface GamesProps {
  games: IGames[]
}

export function Games({}: GamesProps) {
  return <Container></Container>
}
