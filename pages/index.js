import { useState } from 'react';
import {
  Box,
  Link
} from '@chakra-ui/react';
import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Slider from '@/components/Slider';
import Social from '@/components/Social';
import Episodes from '@/components/Episodes';
import Header from '@/components/Header';
import MobileOverlay from '@/components/MobileOverlay';

export default function Home() {
  const sliderImages = [
    { id: 1, url: '/img/mockSlider/slider1.jpg' },
    { id: 2, url: '/img/mockSlider/slider2.jpg' },
    { id: 3, url: '/img/mockSlider/slider3.jpg' },
    { id: 4, url: '/img/mockSlider/slider4.jpg' },
  ]

  const bannerText = [
    { id: 1, text: 'Family' },
    { id: 2, text: 'Business' },
    { id: 2, text: 'Organization' },
    { id: 4, text: 'Consultancy' },
  ]

  return (
    <>
      <Header />
      <Box as='section' m='0px' p='0px'>
        <Slider sliderImg={sliderImages} bannerText={bannerText} />
        <MobileOverlay bannerText={bannerText} />
        <Episodes episodeLength={2} />
        <Box
          bg="white"
          color="gray.500"
          pb={8}
        >
          <NextLink
            href="/legalepisodes">
            <Link
              display='block'
              mx='auto'
              w={{ base: '80%', md: '30%' }}
              textAlign='center'
              colorScheme="teal"
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
          </NextLink>
        </Box>
        <Social />
      </Box>
    </>
  )
}
