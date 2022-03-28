import React, { Component } from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScrollContainer from 'react-indiana-drag-scroll';

const MenuSticky = styled.div`
  width: 100%;
  padding: 10px 0;
  display: -moz-box;
  display: -webkit-box;
  top: 0;
`;

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
  position: relative;
  background: url('${(props) => `${props.img}`}');
  background-repeat: no-repeat;
  background-size: cover;
  .MuiAvatar-root{
    border: 3px solid #338BFF;
  }
`;

const ChipsItem = styled.div`
  margin: 0 10px 0 0;
  a{
    color: #fff;
  }
  .MuiChip-filled{
    background-color: #333;
    border: 1px solid #3C3C3C;
  }
  .MuiChip-outlined{
    border: 1px solid #444;
    &:hover{
      background-color: #444;
    }
  }
`;

const NewsItem = styled.div`
  width: 235px;
  height: 300px;
  margin: 0 20px 0 0;
  cursor: pointer;
  border-radius: 8px;
  background: #eee;
`;

const NewsItemImage = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${({ theme }) => theme.colors.dark_text};
  img{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const NewsItemBodyArea = styled.div`
  height: 18px;
  position: relative;
  padding: 12px 14px;
`;

const NewsItemCompanyArea = styled.div`
  height: 18px;
  position: relative;
  display: flex;
  img{
    border-radius: 4px;
  }
  span{
    color: ${({ theme }) => theme.colors.light_text};
    font-size: 14px;
    font-weight: 500;
    margin-left: 7px;
    margin-top: 1px;
  }
`;

const NewsItemTitleArea = styled.div`
  height: 95px;
  position: relative;
  display: flex;
  margin-top: 10px;
  h3{
    font-size: 17px;
    line-height: 22px;
    font-weight: 500;
    margin: 0;
    color: ${({ theme }) => theme.colors.dark_text};
  }
`;

const NewsItemDateArea = styled.div`
  height: 30px;
  position: relative;
  display: flex;
  margin-top: 10px;
  span{
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin: 0;
    color: ${({ theme }) => theme.colors.light_text};
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
              <Grid item xs={12}><h2>
                  Instagram Stories
                </h2>
              </Grid>
              <Grid item xs={12} id="removing_scroll_button">
                <ScrollContainer component={MenuSticky}>
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
                </ScrollContainer>
              </Grid>
            </Grid>
            <Grid container rowSpacing={1} spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12}>
                <h2>
                  Facebook Stories
                </h2>
              </Grid>
              <Grid item xs={12} id="removing_scroll_button">
                <ScrollContainer component={MenuSticky}>
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
                </ScrollContainer>
              </Grid>
            </Grid>
            <Grid container rowSpacing={1} spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12}>
                <h2>
                  Chips Carousel
                </h2>
              </Grid>
              <Grid item xs={12} id="removing_scroll_button">
                <ScrollContainer component={MenuSticky}>
                  <ChipsItem><Chip label="Homepage" component="a" href="#" clickable/></ChipsItem>
                  <ChipsItem><Chip label="Clone this project on Github" component="a" href="https://github.com/dinizgb/js-scrolling-carousel" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="React Carousel NPM Package" component="a" href="https://www.npmjs.com/package/@trendyol-js/react-carousel" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="Check my Medium Profile and Articles" component="a" href="https://medium.com/@gabriel.sdiniz" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="War on Ukraine" component="a" href="https://www.wsj.com/livecoverage/russia-ukraine-latest-news-2022-03-11" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="World News" component="a" href="https://www.theguardian.com/world/" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="Traversy Media Youtube Channel" component="a" href="https://www.youtube.com/c/TraversyMedia" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="MUI Library" component="a" href="https://mui.com/pt/getting-started/installation/" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="NextJS - The React Framework" component="a" href="https://nextjs.org/" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="Giphy - GIF Library" component="a" href="https://giphy.com/" variant="outlined" clickable/></ChipsItem>
                  <ChipsItem><Chip label="Pexels - Image Library" component="a" href="https://www.pexels.com/" variant="outlined" clickable/></ChipsItem>
                </ScrollContainer>
              </Grid>
            </Grid>
            <Grid container rowSpacing={1} spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12}>
                <h2>
                  News Carousel
                </h2>
              </Grid>
              <Grid item xs={12} id="removing_scroll_button">
                <ScrollContainer component={MenuSticky}>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-krizjohn-rosales-761295.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/new-york-times.png"
                        alt="New York Times Logo"
                        width={16}
                        height={16}
                        />
                        <span>New York Times</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>2.8 Million Have Fled Ukraine, Mostly to Neighboring Nations</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>1 hour ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-pixabay-260367.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/wp-post.png"
                        alt="The Washington Post Logo"
                        width={16}
                        height={16}
                        />
                        <span>The Washington Post</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>Residential building in city’s Obolon district struck by Russian shelling, official says</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>3 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-matti-11284544.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/usa-today-logo.png"
                        alt="The Washington Post Logo"
                        width={18}
                        height={18}
                        />
                        <span>USA Today</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>Will China help Russia evade sanctions or push Putin to end the war?</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>4 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-mathias-pr-reding-11421405.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/axios-icon.png"
                        alt="Axios Logo"
                        width={18}
                        height={18}
                        />
                        <span>Axios</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>How the war in Ukraine hurts the U.S. economy</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>6 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-pixabay-248533.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/wp-post.png"
                        alt="The Washington Post Logo"
                        width={16}
                        height={16}
                        />
                        <span>The Washington Post</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>‘I’m writing this post now and crying’: Russians bid farewell to Instagram</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>7 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-pixabay-40820.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/new-york-times.png"
                        alt="New York Times Logo"
                        width={16}
                        height={16}
                        />
                        <span>New York Times</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>See maps of where Russian airstrikes have ramped up in western Ukraine.</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>9 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-mathias-pr-reding-11421332.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/usa-today-logo.png"
                        alt="The Washington Post Logo"
                        width={18}
                        height={18}
                        />
                        <span>USA Today</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>'Everything we can': Polish border city throws its doors open to desperate Ukrainians fleeing war</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>10 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-cadeau-maestro-1170412.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/wp-post.png"
                        alt="The Washington Post Logo"
                        width={16}
                        height={16}
                        />
                        <span>The Washington Post</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>Fleeing Putin’s crackdown, Russian journalists build media hubs in exile</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>11 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                  <NewsItem>
                    <NewsItemImage>
                      <Image
                      alt="Mountains"
                      src="/images/pexels-asim-alnamat-404995.jpg"
                      layout="fill"
                      objectFit="cover"
                      />
                    </NewsItemImage>
                    <NewsItemBodyArea>
                      <NewsItemCompanyArea>
                        <Image
                        src="/images/axios-icon.png"
                        alt="Axios Logo"
                        width={18}
                        height={18}
                        />
                        <span>Axios</span>
                      </NewsItemCompanyArea>
                      <NewsItemTitleArea>
                        <h3>Jake Sullivan: U.S. will defend "every inch of NATO territory" as Russia strikes western Ukraine</h3>
                      </NewsItemTitleArea>
                      <NewsItemDateArea>
                        <span>14 hours ago</span>
                      </NewsItemDateArea>
                    </NewsItemBodyArea>
                  </NewsItem>
                </ScrollContainer>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <footer>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%', marginBottom: 2 }}>
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