import { useState } from 'react';
import {
  Box,
  Link,
  Container,
  Flex,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Slider from '@/components/Slider';
import Social from '@/components/Social';
import EpisodesWidget from '@/components/EpisodesWidget';
import Header from '@/components/Header';
import MobileOverlay from '@/components/MobileOverlay';
import { getBannerTexts, getSliderImages, getEpisodes, getClientTestimonies } from '../services';
import ClientTestimony from '@/components/ClientTestimony';

export default function Home({ sliderImages, bannerTexts, episodes, testimonies }) {

  return (
    <>
      <Header />
      <Box as='section' m='0px' p='0px'>
        {sliderImages && <Slider sliderImages={sliderImages} bannerTexts={bannerTexts} />}
        {bannerTexts && <MobileOverlay bannerTexts={bannerTexts} />}

        <EpisodesWidget episodes={episodes} />

        <Box
          bg="white"
          color="gray.500"
          pb={8}
        >
          <Link
            href="/legalepisodes"
            display='block'
            mx='auto'
            w={{ base: '80%', md: '30%' }}
            textAlign='center'
            variant="solid"
            bgColor="primary"
            color='white'
            fontWeight='bold'
            p={3}
            borderRadius={5}
            transition={'all .5s ease'}
            _hover={{
              bgColor: 'hoverone'
            }}
          >
            See more
          </Link>
        </Box>
        <Box bg='primary'
          textAlign={'center'}
        >
          <Stack
            spacing={0}
            align={'center'}
            pt={10}
            px={10}>
            <Heading>Our Clients Speak</Heading>
            <Text>We have been working with clients around the world</Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 5, md: 5, lg: 5 }}
            p={10}
          >
            {testimonies && testimonies.map(testimony => {
              return <ClientTestimony key={testimony.id} testimony={testimony} />
            })}
          </Stack>
        </Box>
        <Social />
      </Box>
    </>
  )
}

export const getStaticProps = async () => {

  const sliderImages = await getSliderImages();
  const bannerTexts = await getBannerTexts()
  const episodes = await getEpisodes()
  const testimonies = await getClientTestimonies()

  return {
    props: {
      sliderImages,
      bannerTexts,
      episodes,
      testimonies
    },
    revalidate: 10
  }
}