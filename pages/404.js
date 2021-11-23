import {
  Stack,
  Box,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FcCableRelease } from 'react-icons/fc'

function NotFound() {

  const router = useRouter()

  return (
    <Box
      py='10em'
      px={10}
      textAlign='center'
    >
      <Box
        w="140px"
        mx='auto'
      >
        <FcCableRelease
          fontSize='10em'
        />
      </Box>
      <Heading
        as='h2'
        fontSize='2.5em'
      >
        404 Error!
      </Heading>
      <Text
        fontWeight='bold'
        fontSize='1.2em'
        py={5}
      >
        This page doesn&apos;t exist :(
      </Text>
      <Button
        variant='solid'
        colorScheme='blue'
        onClick={() => { router.push('/') }}
      >
        Go to Homepage
      </Button>
    </Box>
  )
}

export default NotFound
