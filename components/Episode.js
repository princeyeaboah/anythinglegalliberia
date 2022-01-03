import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  AspectRatio
} from '@chakra-ui/react';
import moment from 'moment'
import { BsFillPlayBtnFill } from 'react-icons/bs'

export default function Episode({ episode }) {
  return (
    <Center>
      <Box
        maxW={'520px'}
        w={'full'}
        bg='blue.900'
        p={6}
        mx={7}
        overflow={'hidden'}
      >
        <Box
          //h={'195px'}
          //mb={{ base: 12, md: -8 }}
          md={15}
          pos={'relative'}
        >
          <AspectRatio maxW='560px' ratio={2}>
            <iframe
              title={episode.episodeTitle}
              src={episode.episodeLink}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Stack
          mt={5}>
          <Heading
            color='white'
            fontSize={'2xl'}
            fontFamily={'body'}
            letterSpacing='wider'>
            {episode.episodeTitle}
          </Heading>
          <Text
            color='whiteAlpha.700'
            isTruncated
          >
            {episode.episodeDescription}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'white'}>{moment(episode.createdAt).format('MMM DD YYYY')}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
