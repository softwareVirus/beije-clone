import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container'
import SliderInputs from './Section/SliderInputs';
import DisplayOrder from './Section/DisplayOrder';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Section = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
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
          {
            matches
            &&
            <DisplayOrder />
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default Section