import React from 'react'
import Box from "@mui/material/Box";
import Container from '@mui/material/Container'
import SliderInputs from './Section/SliderInputs';

const Section = () => {
  return (
    <Box component={'main'} sx={{
      paddingTop: {
        md: 10,
        xs: 8
      },
      display:'flex',
      width:'100%',
      height: '100%'
    }}>
      <Container maxWidth="lg" sx={{
        padding: {
          sm: '0 24px',
          xs: '0 16px'
        },
        margin: '0 auto'
      }}>
        <Box>
          <SliderInputs />
        </Box>
      </Container>
    </Box>
  )
}

export default Section