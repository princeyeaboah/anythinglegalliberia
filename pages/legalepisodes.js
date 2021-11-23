import {
  Box,
  Flex,
  Stack,
  Heading,
  Grid,
  Text
} from '@chakra-ui/react';
import Header from '@/components/Header'
import Episodes from '@/components/Episodes';

const legalepisodes = () => {

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
          <Episodes episodeLength={100} />
        </Box>
      </Box >
    </>
  )
}

export default legalepisodes;
