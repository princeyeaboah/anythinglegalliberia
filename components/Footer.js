import {
  Flex,
  Text,
} from "@chakra-ui/react"

const Footer = () => {

  return (
    <Flex
      flexDirection="row"
      bgColor="white"
      justify='space-between'
      color='gray.600'
      fontFamily='Open Sans'
      px={5}
      py={10}
      borderTop='2px solid gray'
    >
      <Flex>
        <Text fontSize='lg' letterSpacing='wider' fontWeight='medium'>&copy;Liblaw | All Rights Reserved.</Text>
      </Flex>
      <Flex>
        {/* <Text> <Text fontWeight='bold' display='inline'>&#60;&#62; </Text> with <Text fontWeight='bold' display='inline'>&hearts; </Text> by: <Link href='https://supastack.com'>SuperStack</Link></Text> */}
      </Flex>
    </Flex>
  );
}

export default Footer;