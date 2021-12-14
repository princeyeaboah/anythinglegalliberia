import React from 'react'
import {
  Link,
  Heading,
  Text,
  Stack,
  Flex,
  Avatar,
  Box,
  Container
} from '@chakra-ui/react'
import { RichText } from '@graphcms/rich-text-react-renderer';

const ClientTestimony = ({ testimony }) => {

  return (
    <>
      <Container
        maxW={'7xl'}
        as={Stack}
        spacing={12}
        p={5}
        color='white'
      >
        <Stack
          bg='blackAlpha.500'
          boxShadow={'lg'}
          p={10}
          rounded={'xl'}
          align={'center'}
          pos={'relative'}
          _after={{
            content: `""`,
            w: 0,
            h: 0,
            borderLeft: 'solid transparent',
            borderLeftWidth: 16,
            borderRight: 'solid transparent',
            borderRightWidth: 16,
            borderTop: 'solid',
            borderTopWidth: 16,
            borderTopColor: 'blackAlpha.500',
            pos: 'absolute',
            bottom: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
          <Heading as={'h3'} fontSize={'xl'}>
            {testimony.testimonyCategory}
          </Heading>
          <Box
            textAlign={'center'}
            color='gray.400'
            fontSize={'md'}>
            <RichText
              content={testimony.clientTestimonial.raw}
              renderers={{
                p: ({ children }) => <Text my={5}>{children}</Text>,
              }}
            />
          </Box>
        </Stack>
        <Flex align={'center'} mt={8} direction={'column'}>
          <Avatar
            size={'lg'}
            src={testimony.clientPhoto.url}
            mb={2} />
          <Stack
            spacing={-1}
            align={'center'}
          >
            <Text letterSpacing={'wider'} fontSize={'lg'} fontWeight={600}>
              {testimony.clientFullName}
            </Text>
            <Text
              fontSize={'md'}
              color='gray.400'>
              {testimony.clientPosition}
            </Text>
          </Stack>
        </Flex>
      </Container>
    </>
  )
}

export default ClientTestimony