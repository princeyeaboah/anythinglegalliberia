import {
  Heading,
  Box,
  Flex,
  Text,
  Link,
  Button,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Icon
} from "@chakra-ui/react"
import NextLink from 'next/link'
import Episode from '@/components/Episode'
import { FiExternalLink } from "react-icons/fi"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 701 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const EpisodesWidget = ({ episodes }) => {
  return (
    <Box
      bg="white"
      color="gray.500"
      p={8}
      w='100%'
    >
      <Box
        borderLeft='10px solid red'
        px={4}
        py={3}
      >
        <Heading
          fontSize='2xl'
          fontFamily='Open Sans'
          color='primary'
          transform='skew(0deg)'
        >Legal Episodes</Heading>
      </Box>
      <Box
        py={4}
        px={3}
        mb={5}
        bg='gray.500'
        color='white'
      >
        <Text>
          Episodes are automatically sorted by the most recent release
        </Text>
      </Box>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {episodes && episodes.map(episode => {
          return <Episode key={episode.id} episode={episode} />
        }
        )}
      </Carousel>
    </Box >
  );
}

export default EpisodesWidget;