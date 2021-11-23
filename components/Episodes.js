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

const Episodes = ({ episodeLength }) => {

  const legalEpisodes = [
    {
      title: 'First Episode',
      url: 'https://youtu.be/tollGa3S0o8',
      description: 'This is the first legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Second Episode',
      url: 'https://youtu.be/juBnNBm0cPw',
      description: 'This is the second legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Third Episode',
      url: 'https://youtu.be/eWFI5yJcEz8',
      description: 'This is the third legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Fourth Episode',
      url: 'https://youtu.be/Fp8msa5uYsc',
      description: 'This is the fourth legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Fifth Episode',
      url: 'https://youtu.be/rYUo8lZj8fo',
      description: 'This is the fifth legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Sixth Episode',
      url: 'https://youtu.be/juBnNBm0cPw',
      description: 'This is the sixth legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Seventh Episode',
      url: 'https://youtu.be/rYUo8lZj8fo',
      description: 'This is the fifth legal eipisode video on this website, hope you enjoy it. This is the fifth legal eipisode video on this website, hope you enjoy it.  This is the fifth legal eipisode video on this website, hope you enjoy it.'
    },
    {
      title: 'Eighth Episode',
      url: 'https://youtu.be/juBnNBm0cPw',
      description: 'This is the sixth legal eipisode video on this website, hope you enjoy it.'
    },
  ]

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
        py={2}
        px={3}
        mb={5}
        bg='gray.500'
        color='white'
      >
        <Text>
          Episodes are automatically sorted by the most recent release
        </Text>
      </Box>
      <SimpleGrid
        spacing={10}
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        {legalEpisodes && legalEpisodes.reverse().map((episode, index) => {

          if (index <= episodeLength) {
            return (<Episode key={index} episode={episode} />)
          } else {
            return
          }
        })}
      </SimpleGrid>

    </Box >
  );
}

export default Episodes;