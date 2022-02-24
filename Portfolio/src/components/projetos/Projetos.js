import React from 'react';
import { Box, Text } from '@skynexui/components';
import Cards from './Cards';


export default function Projetos() {
  return (
    <>
      <Box
        styleSheet={{
          margin: '0px 20px',
          display: 'flex',
          margin: '20px auto'
        }}
      >
        <Cards>
          <Text
            as='h3'
            className='tituloProjeto'
          >
            Titulo do Projeto
          </Text>

          <Text>
            Tecnologias: HTML, CSS e JavaScript
          </Text>
        </Cards>

        <Cards>
          <Text
            as='h3'
            className='tituloProjeto'
          >
            Titulo do Projeto
          </Text>

          <Text>
            Tecnologias: HTML, CSS e JavaScript
          </Text>
        </Cards>

        <Cards>
          <Text
            as='h3'
            className='tituloProjeto'
          >
            Titulo do Projeto
          </Text>

          <Text>
            Tecnologias: HTML, CSS e JavaScript
          </Text>
        </Cards>
      </Box>

      <Box
        styleSheet={{
          margin: '0px 20px',
          display: 'flex',
          margin: '20px auto'
        }}
      >
        <Cards>
          <Text
            as='h3'
            className='tituloProjeto'
          >
            Titulo do Projeto
          </Text>

          <Text>
            Tecnologias: HTML, CSS e JavaScript
          </Text>
        </Cards>

        <Cards>
          <Text
            as='h3'
            className='tituloProjeto'
          >
            Titulo do Projeto
          </Text>

          <Text>
            Tecnologias: HTML, CSS e JavaScript
          </Text>
        </Cards>

        <Cards>
          <Text
            as='h3'
            className='tituloProjeto'
          >
            Titulo do Projeto
          </Text>

          <Text>
            Tecnologias: HTML, CSS e JavaScript
          </Text>
        </Cards>
      </Box>
    </>
  )
}
