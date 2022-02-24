import React from 'react'
import { Box, Image } from '@skynexui/components';


export default function Cards(props) {
  return (
    <>
      <Box
        as='div'
        styleSheet={{
          padding: '20px 25px',
          backgroundColor: '#212121',
          margin: '0px 20px'
        }}
      >
        <Image
          styleSheet={{
            width: '300px',
            height: '130px',
            backgroundColor: '#000',
            margin: '0px 0px 20px 0px'
          }}
          src={props.src}
          href={props.href}
        />
        {props.children}
      </Box>
    </>
  )
}
