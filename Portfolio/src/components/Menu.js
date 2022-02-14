import React, { Component } from 'react';
import {Box} from '@skynexui/components';

const List = ({children}) => {
    return (
        <>
            <li 
            style={{
                marginLeft: '25px',
            }}
            >
                {children}
            </li>
        </>
    )
}

// LINK DO MENU 
const Link = ({children}) => {
    return (
        <>
             <a href='#' 
            style={{
                color: '#ffff',
                textDecoration: 'none',
            }}
            >
                {children}
            </a>
        </>
    )
}


const Menu = () => {
    return (
      <Box>
        <Box
        as='div'
        style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '25px 0',
            margin: '0 auto',
            width: '940px'
        }}>
            <Box
            as='div'
            style={{
                width: '50%',
                color: '#ffff'
            }}
            >
                <p>
                    Portfólio
                </p>
            </Box>

            <Box
            as='nav'
            style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center'

            }}
            >
                <Box
                as='ul'
                style={{
                    display: 'flex',
                    fontSize: '14px',
                    listStyle: 'none',
                    justifyContent: 'end',
                    width: '100%',
                }}
                >
                    <List>
                       <Link>
                            Home
                        </Link>
                    </List>
                    <List>
                       <Link>
                            Sobre mim
                        </Link>
                    </List>
                    <List>
                       <Link>
                            Projetos
                        </Link>
                    </List>
                    <List>
                       <Link>
                            Skills
                        </Link>
                    </List>
                </Box>
            </Box>

        </Box>
      </Box>
    )
  }


  export default Menu;
