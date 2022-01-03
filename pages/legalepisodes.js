import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  SimpleGrid,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  Icon,
  InputLeftElement
} from '@chakra-ui/react';
import Header from '@/components/Header'
import Episode from '@/components/Episode';
import { getEpisodes } from '../services';
import { SearchIcon } from '@chakra-ui/icons';

const Legalepisodes = () => {

  const [episodes, setEpisodes] = useState([]);
  const [filters, setFilters] = useState({ s: '' });

  const search = (s) => {
    setFilters({ s })
  }

  useEffect(() => {

    (async () => {
      const data = await getEpisodes()
      setEpisodes(data)
    }
    )()
  }, [])

  useEffect(() => {
    (async () => {

      /* let data = episodes.filter(episode => {
        episode.episodeTitle.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
      }) 
      setEpisodes(data)
      console.log(data)
      */
      let newData = [];

      if (filters.s !== '') {
        episodes.map(episode => {
          if (episode.episodeTitle.toLowerCase().includes(filters.s.toLowerCase())) {
            newData.push(episode)
          }
        })
        setEpisodes(newData)
      } else {
        const data = await getEpisodes()
        setEpisodes(data)
      }
    })()

  }, [filters])

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
            Episodes are automatically sorted by the most recent release.
          </Text>
        </Box>
        <Box
          px={6}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color='blue' />}
            />
            <Input
              size='md'
              placeholder='Search Episode'
              id='episodeSearchBar'
              _placeholder={{
                color: 'gray',
                fontWeight: 'medium',
                fontStyle: 'italic',
                letterSpacing: 'wide'
              }}
              onKeyUp={e => search(e.target.value)}
            />
          </InputGroup>

        </Box>
        <Box
          py={10}
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

export default Legalepisodes;


/* export const getStaticProps = async () => {
  const fetchEpisodes = await getEpisodes()

  return {
    props: {
      fetchEpisodes,
    },
    revalidate: 10
  }
} */