import React from 'react';
import Menu from './Menu';
import { Box, Button, Text } from '@skynexui/components';
import Lottie from 'react-lottie';
import animationData from '../../animations/DevAnimation.json';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [animationState, setAnimationState] = React.useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box as="div">
      <Menu />

      <Box
        as="div"
        styleSheet={{
          margin: '0 auto',
          width: '940px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <Box
          as="div"
          styleSheet={{
            width: '50%',
          }}
        >
          <Text
            as="h2"
            styleSheet={{
              color: '#fff',
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            Olá, eu sou o <br />
            Jonathan Lucas
          </Text>
          <Text
            as="p"
            styleSheet={{
              marginTop: '20px',
              color: '#828282',
              fontSize: '18px',
            }}
          >
            Desenvolvedor Front-End
          </Text>

          <Box
            as="div"
            styleSheet={{
              display: 'flex',
              marginTop: '20px',
            }}
          >
            <Button
              iconName="github"
              label="GitHub"
              href="https://github.com/JonathanAssis"
              styleSheet={{
                marginRight: '20px',
                backgroundColor: '#7132DB',

                hover: {
                  backgroundColor: '#6112eb',
                },

                focus: {
                  backgroundColor: '#6112eb',
                },
              }}
            />

            <Button
              iconName="linkedin"
              label="Linkedin"
              href="https://www.linkedin.com/in/jonathan-lucas-3834551b3/"
              styleSheet={{
                backgroundColor: '#7132DB',

                hover: {
                  backgroundColor: '#6112eb',
                },

                focus: {
                  backgroundColor: '#6112eb',
                },
              }}
            />
          </Box>
        </Box>

        <Box
          as="div"
          styleSheet={{
            width: '50%',
          }}
        >
          <Lottie
            style={{
              marginLeft: 'auto',
              marginRight: '-100px',
            }}
            options={defaultOptions}
            height={500}
            width={500}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
