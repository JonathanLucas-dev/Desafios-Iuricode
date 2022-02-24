import React from 'react';
import { Box, Text } from '@skynexui/components';
import Cards from './Cards';


export default function Projetos() {
  return (
    <>
      <Box
      >
        <Text
          as='h2'
          styleSheet={{
            textAlign: 'center',
            color: '#F9F9F9',
            fontSize: '32px',
            margin: '25px auto',
            fontWeight: 'bold'

          }}
        >

          Projetos

        </Text>
      </Box>

      <Box
        styleSheet={{
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
