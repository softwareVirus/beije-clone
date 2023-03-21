import React from 'react'
import { Grid, Box } from '@mui/material'
import { styles } from '@/utils/style'

const Footer = () => {
  return (
    <Grid container>
      <Box sx={{
        padding: {
          md: '80px 144px',
          xs: '40px 27px'
        },
        gap: {
          md: '64px',
          xs: '24px'
        }
      }}>
        <Box component={'footer'}>
          
        </Box>
      </Box>
    </Grid>
  )
}

export default Footer