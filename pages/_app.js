import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #18191A;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  h1{
    font-size: 28px;
    font-weight: 300;
  }
  h2{
    font-size: 24px;
    font-weight: 300;
  }
  a{
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -ms-transition: 0.25s;
    transition: 0.25s;
    &:hover{
      color: #00D982;
      -webkit-transition: 0.25s;
      -moz-transition: 0.25s;
      -o-transition: 0.25s;
      -ms-transition: 0.25s;
      transition: 0.25s;
    }
  }
  #removing_scroll_button{
    button{
      display: none;
    }
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#242526',
    primary_text: '#fff',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
