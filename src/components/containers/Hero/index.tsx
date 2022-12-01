import * as Styled from './style'
import Bg1 from '@/assets/images/banner-diablo.jpg'

export function Hero() {
  return (
    <Styled.Container
      style={{
        backgroundImage: `url(${Bg1.src})`,
      }}
    ></Styled.Container>
  )
}
