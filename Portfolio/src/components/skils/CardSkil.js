import React from 'react';
import { Box, Text, Icon } from '@skynexui/components';


export const CardSkil = (props) => {
  return (
    <>
      <Box
        as='div'
        styleSheet={{
          width: '150px',
          height: '150px',
          backgroundColor: '#212121',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Icon
          label={props.label}
          name={props.name}
          styleSheet={{
            fontSize: '80px',
            color: '#7132DB'
          }}
        />
      </Box>
    </>
  )
}
