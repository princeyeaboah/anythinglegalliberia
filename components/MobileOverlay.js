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

const MobileOverlay = ({ bannerText }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      p={10}
      fontSize='4xl'
      fontWeight='medium'
      fontFamily='Banner'
      letterSpacing='wider'
      // textAlign='center'
      bg='primary'
    >
      <Text>Providing Legal Coverage for your</Text>
      <TextLoop springConfig={{ stiffness: 70, damping: 31 }}
        adjustingSpeed={500}>
        {bannerText && bannerText.map(text => (
          <Text
            key={text.id}
            bgGradient='linear(to-l, orange, #FF0080)'
            backgroundClip='text'
          >{text.text}</Text>
        ))
        }
      </TextLoop>{""}.
    </Box>
  )
}

export default MobileOverlay
