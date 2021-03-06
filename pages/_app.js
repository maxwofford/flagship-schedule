import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@hackclub/design-system'
import theme from '../components/style'

export default class extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Schedule – Flagship Summit</title>
          <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet" />
          {/* <style children={`body{background:${cx('darker')};}`} /> */}
          <style children={`body{background:${theme.cx('#EEAA48')};background-image:${theme.gradient('#EEAA48','#F0984A')};}`} />
        </Head>
        <ThemeProvider theme={theme} webfonts>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}