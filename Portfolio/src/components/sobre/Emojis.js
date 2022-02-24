import React from 'react'
import { Box, Text, Button } from '@skynexui/components';


export const Emojis = (props) => {
  return (
    <div>
      <Button
        iconName={props.iconName}
        href={props.href}
        styleSheet={{
          color: '#7132DB',
          backgroundColor: '#212121',
          fontSize: '24px',

          hover: {
            color: '#7132DB',
            backgroundColor: '#212121',
          },

          focus: {
            color: '#7132DB',
            backgroundColor: '#212121',
          }
        }}
      >
      </Button>
      {props.children}
    </div >
  )
}
