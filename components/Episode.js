import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function Episode({ episode }) {

  const { title, url, description } = episode
  return (
    <Center>
      <Box
        maxW={'520px'}
        w={'full'}
        bg='blue.900'
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        mx={2}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
            alt=''
          />
        </Box>
        <Stack>
          <Heading
            color='white'
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color='whiteAlpha.700'
            noOfLines={2}>
            {description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'white.200'}>Feb 08, 2021 · 6min watch</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
