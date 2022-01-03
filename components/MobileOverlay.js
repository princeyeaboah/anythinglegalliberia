import React from 'react'
import TextLoop from "react-text-loop";
import {
  Heading,
  Box,
  Flex,
  IconButton,
  Icon,
  Button,
  useDisclosure,
  Stack,
  Text,
  Center,
  Link,
  Image,
  Spinner,
  Slide,
  SlideFade,
  useColorMode,
} from "@chakra-ui/react"
import NextImage from 'next/image'
import NextLink from 'next/link'

const MobileOverlay = ({ bannerTexts }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      p={10}
      fontSize='4xl'
      fontWeight='medium'
      fontFamily='Banner'
      letterSpacing='wider'
      textAlign='center'
      bg='primary'
    >
      <Box
        color='white'
      >The Home of Legal <Text color='red.600' display={'inline'}>Analysis</Text> and <Text color='red.600' display={'inline'}>Research</Text></Box>
    </Box>
  )
}

export default MobileOverlay
