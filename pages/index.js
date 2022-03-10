import styled from 'styled-components';
import Head from "next/head";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const Header = styled.header`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary_text};
`;

const InstagramItem = styled.div`
  margin: 0 20px 0 0;
  padding: 4px;
  border: 2px #D92C7C solid;
  border-radius: 50%;
  cursor: pointer;
`;

const FacebookItem = styled.div`
  width: 135px;
  height: 230px;
  margin: 0 20px 0 0;
  padding: 4px;
  cursor: pointer;
  border-radius: 8px;
  background: url('${(props) => `${props.img}`}');
  background-repeat: no-repeat;
  background-size: cover;
  .MuiAvatar-root{
    border: 3px solid #338BFF;
  }
`;


export default function Index() {
  return (
    <>
      <Head>
        <title>Javascript Scrolling Carousel Examples</title>
        <meta name="description" content="Javascript Scrolling Carousel examples using the 'react-carousel' npm library."/>
        <meta property="og:title" content="Javascript Scrolling Carousel Examples" key="title"/>
        <meta property="og:description" content="Javascript Scrolling Carousel examples using the 'react-carousel' npm library."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://cardinal.com/" />
        <meta property="og:site_name" content="Javascript Scrolling Carousel" />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:image" content={`/images/thumb.png`} />
        <meta name="twitter:site" content="@cardinal" />
        <meta name="twitter:creator" content="@cardinal" />
        <link rel="icon" type="image/x-icon" href={`images/favicon-1.ico?w=64`}></link>
        <link rel="preload" href={`/image/logo.png`} as="image"/>
      </Head>
      <Header>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', marginBottom: 3 }}>
            <Grid container rowSpacing={1} spacing={2}>
              <Grid item xs={6}>
                <h1>Javascript Scrolling Carousel</h1>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right', marginTop: 2.5 }}>
                <a href="https://github.com/dinizgb/js-scrolling-carousel" target="_blank"><GitHubIcon sx={{ fontSize: 35 }}/></a>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Header>
      <main>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', marginBottom: 3 }}>
            <Grid container rowSpacing={1} spacing={2}>
              <Grid item xs={12}>
                <h2>
                  Instagram Stories
                </h2>
              </Grid>
              <Grid item xs={12} id="removing_scroll_button">
                <ScrollingCarousel>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-andrea-piacquadio-716658.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-andrea-piacquadio-813940.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-dominika-roseclay-2023384.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-godisable-jacob-965324.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-hasibullah-zhowandai-819530.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-jenna-hamra-1054422.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-andrea-piacquadio-762084.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-yuri-manei-2690323.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-konstantin-mishchenko-2896428.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-pixabay-206434.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-pixabay-262391.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-pixabay-354951.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-pixabay-415263.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-reead-886285.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-victor-miyata-1845534.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                      <InstagramItem><Avatar alt="Instagram Stories Item" src="/images/pexels-vinicius-wiesehofer-1130624.jpg" sx={{ width: 80, height: 80 }} /></InstagramItem>
                </ScrollingCarousel>
              </Grid>
            </Grid>
            <Grid container rowSpacing={1} spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12}>
                <h2>
                  Facebook Stories
                </h2>
              </Grid>
              <Grid item xs={12} id="removing_scroll_button">
                <ScrollingCarousel>
                      <FacebookItem img={`/images/giphy1.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-andrea-piacquadio-716658.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/pexels-andrea-piacquadio-813940.jpg`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-andrea-piacquadio-813940.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/pexels-dominika-roseclay-2023384.jpg`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-dominika-roseclay-2023384.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy2.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-godisable-jacob-965324.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy3.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-hasibullah-zhowandai-819530.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/pexels-jenna-hamra-1054422.jpg`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-jenna-hamra-1054422.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy4.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-yuri-manei-2690323.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/pexels-andrea-piacquadio-762084.jpg`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-andrea-piacquadio-762084.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy5.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-pixabay-262391.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/pexels-konstantin-mishchenko-2896428.jpg`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-konstantin-mishchenko-2896428.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy6.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-pixabay-354951.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/pexels-pixabay-206434.jpg`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-pixabay-206434.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy7.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-pixabay-415263.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                      <FacebookItem img={`/images/giphy8.gif`}>
                        <Avatar alt="Facebook Stories Avatar" src="/images/pexels-reead-886285.jpg" sx={{ width: 40, height: 40, marginTop: 1, marginLeft: 1 }} />  
                      </FacebookItem>
                </ScrollingCarousel>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <footer>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', marginBottom: 3 }}>
            <Grid container rowSpacing={1} spacing={2}>
              <Grid item xs={12}>
                <p>This is an open source project, feel free to contribute <a href="https://github.com/dinizgb/js-scrolling-carousel" target="_blank">here</a>.</p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </footer>
    </>
  );
}