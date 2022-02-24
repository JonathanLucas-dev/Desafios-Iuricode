import React from 'react';
import { Box, Text, Image } from '@skynexui/components';
import { Emojis } from './Emojis';


export const Sobre = () => {
  return (
    <>
      <Box
        as='div'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Box
          as='div'
        >
          <Text
            as='h3'
            styleSheet={{
              color: '#F9F9F9',
              fontSize: '32px',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Sobre mim
          </Text>

          <Text
            as='p'
            styleSheet={{
              color: '#828282',
              fontSize: '14px',
              lineHeight: '32px',
              margin: '0 auto',
              textAlign: 'center',
              width: '745px',

            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident

          </Text>
        </Box>


        <Box
          as='div'
          styleSheet={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '80px auto',
            textAlign: 'center',
            width: '940px'
          }}
        >
          <Emojis
            iconName="linkedin"
            href='https://www.linkedin.com/in/jonathan-lucas-3834551b3/'
          >
            <Text
              as='h3'
              styleSheet={{
                color: '#f9f9f9',
                fontSize: '14px',
                fontWeight: '700',
                margin: '10px 0',
                lineHeight: '24px'
              }}
            >
              Linkedin
            </Text>

            <Text
              as='p'
              styleSheet={{
                color: '#828282',
                fontSize: '12px',
              }}
            >
              Jonathan Lucas
            </Text>
          </Emojis>

          <Emojis
            iconName="github"
            href='https://github.com/JonathanAssis'
          >
            <Text
              as='h3'
              styleSheet={{
                color: '#f9f9f9',
                fontSize: '14px',
                fontWeight: '700',
                margin: '10px 0',
                lineHeight: '24px'
              }}
            >
              GitHub
            </Text>

            <Text
              as='p'
              styleSheet={{
                color: '#828282',
                fontSize: '12px',
              }}
            >
              /JonathanAssis
            </Text>
          </Emojis>

          <Emojis
            iconName="EnvelopeOpen"
          >
            <Text
              as='h3'
              styleSheet={{
                color: '#f9f9f9',
                fontSize: '14px',
                fontWeight: '700',
                margin: '10px 0',
                lineHeight: '24px'
              }}
            >
              Email
            </Text>

            <Text
              as='p'
              styleSheet={{
                color: '#828282',
                fontSize: '12px',
              }}
            >
              Jonathan.assis@outlook.com.br
            </Text>
          </Emojis>

          <Emojis
            iconName="wordpress"
            href='https://newstep.com.br/'

          >
            <Text
              as='h3'
              styleSheet={{
                color: '#f9f9f9',
                fontSize: '14px',
                fontWeight: '700',
                margin: '10px 0',
                lineHeight: '24px'
              }}
            >
              Site
            </Text>

            <Text
              as='p'
              styleSheet={{
                color: '#828282',
                fontSize: '12px',
              }}
            >
              newstep.com.br
            </Text>
          </Emojis>
        </Box>
      </Box>
    </>
  )
}
