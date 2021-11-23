import {
  Heading,
  Text,
  Stack,
  useColorMode,
  Box,
  useColorModeValue,
  Contianer
} from '@chakra-ui/react';
import Header from '@/components/Header'

function aboutus() {

  return (
    <>
    <Header />
      <Stack
        px={{ base: '2em', md: '6em' }}
        py='1.6em'
        direction='column'
        bg='white'
        color='gray.800'
        fontFamily='body'
        letterSpacing='wide'
      >
        <Stack
          p='1.5em'>
          <Heading
            as='h3'
            fontFamily='heading'
            letterSpacing='wider'
            fontWeight='bold'
            color='primary'
            fontSize='1.6em'
            paddingBottom={4}
          >Welcome to the Official Website of Anything Liberia</Heading>
          <Text>
            The Rural Human Rights Activists Programme (RHRAP), Inc. is a human rights and peace organization that was established in December 1997 by a group of activists who believed that the message of human rights should be spread into the rural areas so as to educate the rural inhabitants on issues of human rights, peace and social developments. It is an non-profitable, non-governmental, and none-political organization. RHRAP has a five men board of directors that run the final decision for the organization.
          </Text>
        </Stack>
        <Stack
          p='1.5em'>
          <Box
            mb={5}
            borderLeft='10px solid red'
            px={3}
          >
          <Heading
            as='h3'
            fontFamily='body'
            letterSpacing={2}
            fontWeight='bold'
            color='primary'
            fontSize='x-large'
          >Mission</Heading>
          </Box>
          <Text>To build an environment where human rights and democratic principles will take firm roots and flourish at all levels.</Text>
        </Stack>
        <Stack
          p='1.5em'>
          <Box
            mb={5}
            borderLeft='10px solid red'
            px={3}
          >
          <Heading
            as='h3'
            fontFamily='body'
            letterSpacing={2}
            fontWeight='bold'
            color='primary'
            fontSize='x-large'
          >Vision</Heading>
          </Box>
          <Text>RHRAP envisages the world as a place where there is a rule of law, lasting peace, stability amongst its people.</Text>
        </Stack>
        <Stack
          p='1.5em'>
          <Box
            mb={5}
            borderLeft='10px solid red'
            px={3}
          >
          <Heading
            as='h3'
            fontFamily='body'
            letterSpacing={2}
            fontWeight='bold'
            color='primary'
            fontSize='x-large'
          >Goal</Heading>
          </Box>
          <Text>RHRAP envisages the world as a place where there is a rule of law, lasting peace, stability amongst its people.</Text>
        </Stack>
      </Stack>
    </>
  )
}

export default aboutus
