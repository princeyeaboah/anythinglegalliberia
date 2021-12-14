import {
  Box,
  Flex,
  Stack,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import Header from '@/components/Header'
import Episode from '@/components/Episode';
import { getEpisodes } from '../services';

const legalepisodes = ({ episodes }) => {

  return (
    <>
      <Header />
      <Box
        bg="white"
        color="gray.500"
        p={8}
      ><Box
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
        <Box
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {episodes && episodes.map(episode => {
              return <Episode key={episode.id} episode={episode} />
            })}
          </SimpleGrid>
        </Box>
      </Box >
    </>
  )
}

export default legalepisodes;

export const getStaticProps = async () => {
  const episodes = await getEpisodes()

  return {
    props: {
      episodes,
    },
    revalidate: 10
  }
}