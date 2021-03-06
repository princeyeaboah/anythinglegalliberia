import {
  Heading,
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  VStack,
  HStack,
  Spinner,
  Collapse,
  Icon,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { icons } from 'react-icons';
import { FaEnvelope, FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import NextLink from 'next/link'
import RequestService from './RequestService';

function Social() {

  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      background='white'
      color={'primary'}
      justify='space-between'
      p={10}
    >
      <Flex
        flex={{ md: '2' }}
      >
        <RequestService />
      </Flex>
      <Flex
        flexDir='column'
        flex={{ md: '1' }}
        py={{ base: 20, md: 0 }}
      >
        <Text
          fontSize='3xl'
          textAlign='center'
          py={3}
          color="primary"
        >Follow us on</Text>

        <Flex flexDir={{ base: 'row', md: 'column' }}
          justify='space-evenly'
          alignContent='space-between'
          align='center'
          height={{ md: '20em' }}
          py={2}
        >
          <Link
            href='https://web.facebook.com/Liblaw-110597158089492'
            target={'_blank'}>
            <Icon
              transition={'all .5s ease'}
              as={FaFacebookF}
              w={10}
              h={10}
              color='primary'
              _hover={{
                color: 'hoverone'
              }}
            />
          </Link>
          <Link
            href='https://mobile.twitter.com/LiblawLiberia'
            target={'_blank'}>
            <Icon
              transition={'all .5s ease'}
              as={FaTwitter}
              w={10}
              h={10}
              color='primary'
              _hover={{
                color: 'hoverone'
              }} />
          </Link>
          <Link
            href='mailto:info@liblaw.org'>
            <Icon
              transition={'all .5s ease'}
              as={FaEnvelope}
              w={10}
              h={10}
              color='primary'
              _hover={{
                color: 'hoverone'
              }} />
          </Link>
          <Link
            href='https://youtube.com/channel/UCWAIrH_rgdmbkUyjEha2btg'
            target={'_blank'}>
            <Icon
              transition={'all .5s ease'}
              as={FaYoutube}
              w={10}
              h={10}
              color='primary'
              _hover={{
                color: 'hoverone'
              }} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/liblaw-liberia-901599229/'
            target={'_blank'}>
            <Icon
              transition={'all .5s ease'}
              as={FaLinkedinIn}
              w={10}
              h={10}
              color='primary'
              _hover={{
                color: 'hoverone'
              }} />
          </Link>
        </Flex>
      </Flex>
    </Flex >
  )
}

export default Social;
