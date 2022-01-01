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

export default function Slider({ sliderImages, bannerTexts }) {

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
          {sliderImages && sliderImages.map(img => {
            return <Image
              alt=""
              key={img.id}
              src={`${img.sliderImageFile.url}`}
              className="keen-slider__slide number-slide1 slide"
              objectFit='cover' />
          })}
        </Box>
        {sliderImages && <>
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
            <Text
              color='white'
            >The Home of Legal <Text color='red.600' display={'inline'}>Analysis</Text> and <Text color='red.600' display={'inline'}>Research</Text></Text>
          </Box>
        </>
        }
      </Box>
    </>
  )
}
