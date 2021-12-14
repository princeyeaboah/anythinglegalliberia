import {
  Box,
  Flex,
  Stack,
  Heading,
  Grid,
  Text
} from '@chakra-ui/react';
import Header from '@/components/Header'
import Episodes from '@/components/EpisodesWidget';

const legalepisodes = ({ episodes }) => {

  return (
    <>
      <Header />
      <Box
        bg="white"
        color="gray.500"
        p={8}
      >
        <Box
        >
          <Episodes episodes={episodes} />
        </Box>
      </Box >
    </>
  )
}

export default legalepisodes;
