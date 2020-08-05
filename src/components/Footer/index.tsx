import React from 'react'
import Link from 'next/link'

import { FooterBase, Logo } from './styles'

const Footer = () => {
  return (
    <FooterBase>
      <Link href="/">
        <Logo src="/img/logo.png" alt="Logo do Netcheflix" />
      </Link>
      <p>
        Adaptado por{' '}
        <a
          href="https://github.com/sganzerla/"
          target="_blank"
          rel="noreferrer"
        >
          Alisson M. Sganzerla
        </a>{' '}
        do projeto de{' '}
        <a
          href="https://www.johnywalves.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          Johny W. Alves
        </a>{' '}
        durante a{' '}
        <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  )
}

export default Footer
