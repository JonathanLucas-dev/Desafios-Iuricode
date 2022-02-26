import React from 'react';
import { Box, Text } from '@skynexui/components';
import { CardSkil } from './CardSkil';

export const Skils = () => {
  return (
    <>
      <Box
        as="div"
        styleSheet={{
          padding: '120px 0',
        }}
      >
        <Text
          as="h2"
          styleSheet={{
            textAlign: 'center',
            color: '#F9F9F9',
            fontSize: '32px',
            margin: '25px',
            fontWeight: 'bold',
          }}
        >
          Skils
        </Text>

        <Box
          styleSheet={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '1140px',
            margin: '0 auto',
          }}
        >
          <CardSkil label="Icon Component" name="FaHtml5" />

          <CardSkil label="Icon Component" name="FaCss3Alt" />

          <CardSkil label="Icon Component" name="FaJs" />
          <CardSkil label="Icon Component" name="FaReact" />
          <CardSkil label="Icon Component" name="FaPhp" />
        </Box>
      </Box>
    </>
  );
};
