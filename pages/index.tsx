import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/Theme/theme'
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import PopoverMenuProduct from '@/components/Header/PopoverMenuProduct';
import { Grid } from '@mui/material';
import PopoverMenuMobile from '@/components/Header/PopoverMenuMobile';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundColor: 'white'}}>
        <ThemeProvider theme={theme}>
          <Header/>
          <Grid>
          <PopoverMenuProduct />
          </Grid>
          <Grid>
          <PopoverMenuMobile />
          </Grid>
          <Section />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  )
}
