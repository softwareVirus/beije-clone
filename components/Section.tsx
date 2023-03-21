import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container'
import SliderInputs from './Section/SliderInputs';
import DisplayOrder from './Section/DisplayOrder';

const Section = () => {
  return (
    <Box component={'main'} sx={{
      paddingTop: {
        md: 10,
        xs: 8
      },
      display:'flex',
      width:'100%',
      height: '100%',
      backgroundColor: 'rgb(249, 245, 242)'
    }}>
      <Container maxWidth="lg" sx={{
        margin: '0 auto',
        p:'0 !important'
      }}>
        <Grid container justifyContent={'space-between'} sx={{
          padding: '152px 0px 96px !important',
          width: '100%'
        }}>
          <SliderInputs />
          <DisplayOrder />
        </Grid>
      </Container>
    </Box>
  )
}

export default Section