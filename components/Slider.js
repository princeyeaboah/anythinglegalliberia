import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
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
} from "@chakra-ui/react"
import NextImage from 'next/image'
import NextLink from 'next/link'

export default function Slider({ sliderImg, bannerText }) {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 4000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      {/* slide wrapper container element */}
      <Box
        position='relative'
        _hover={{ cursor: 'grabbing' }}
      >{/* slider images wrapper or container */}
        <Box
          position='relative'
          maxHeight='500px'
          as='section'
          arial-label='image slider'
          ref={sliderRef}
          className="keen-slider"
        >
          {sliderImg && sliderImg.map(img => {
            return <Image
              alt=""
              key={img.id}
              src={`${img.url}`}
              className="keen-slider__slide number-slide1 slide"
              objectFit='cover' />
          })}
        </Box>
        <Box
          position="absolute"
          h="500px"
          width="550px"
          top="0"
          bg='primary'
          opacity='.7'
          transform='skew(-15deg)'
          ml='-100px'
          overflow='hidden'
          display={{ base: 'none', md: 'block' }}
          borderRight='10px solid red'
        >

        </Box>
        <Box
          position='absolute'
          top='10'
          width="350px"
          px={10}
          fontSize='2.8em'
          fontWeight='medium'
          fontFamily='Banner'
          letterSpacing='wider'
          color='white'
          display={{ base: 'none', md: 'block' }}
        >
          <Text>Providing</Text>
          <Text>Legal</Text>
          <Text>Coverage</Text>
          <Text>for your</Text>
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
          </TextLoop>{" "}
        </Box>
      </Box>
    </>
  )
}
