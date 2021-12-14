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
          >Welcome to the Official Website of Liblaw</Heading>
          <Text
            textAlign={'justify'}
            lineHeight='8'
          >
            Liblaw is the ultimate in lawyering and Social research in Liberia. Founded in 2021, the goal of Anything Liberia is to produce cutting edge products through a combination of technology, world-class analysis, and local context. ALL aspires to provide timely and high quality legal and social research products that inform decision-makers at the highest levels nationally and internationally. Professional responsibility and high ethical standards are mainstreamed elements of ALL’s approach to the provision of services for clients.
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
            >KEY FACTS</Heading>
          </Box>
          <Text>Top legal analysis wizardry</Text>
          <Text>Top in the aesthetics of social science research</Text>
          <Text>Combines technical know-how with style</Text>
          <Text>20 years of combined experience</Text>
          <Text>We are ready!!!</Text>
        </Stack>
      </Stack>
    </>
  )
}

export default aboutus
