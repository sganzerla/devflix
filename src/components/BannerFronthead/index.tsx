import React from 'react'

import { Container, Explain, Title, Draw, Logo } from './styles'

const BannerFronthead = () => {
  return (
    <Container>
      <Explain>
        <Logo id="logo_forehead" src="/img/logo.png" />
        <Title>
          Filmes, séries e muito mais. Sem limites. Assista onde quiser.
          Divulgação de conteúdo do mito <span>Guri de Uruguaiana</span> uma
          lenda da cultura gaúcha.
        </Title>
      </Explain>
    </Container>
  )
}

export default BannerFronthead
