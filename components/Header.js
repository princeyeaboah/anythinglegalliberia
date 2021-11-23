import {
  Heading,
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon
} from '@chakra-ui/icons'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { icons } from "react-icons"

const Header = (props) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        fontFamily='heading'
        bg='bgColor'
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor='gray.900'
        align={'center'}>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'space-between' }}
          py={2}
          px={8}
        >
          {/* <Heading
            letterSpacing='widest'
            fontFamily="heading"
            fontSize='1.4em'
          >
            <Text display='inline' color='red'>Anything</Text>
            <Text display='inline' color='blue'>Liberia</Text>
          </Heading> */}
          <NextImage
            alt='logo'
            width='100px'
            height='125px'
            src="/img/anythinglegal_Logo_2.png" />

          <Flex
            display={{ base: 'none', md: 'none', lg: 'flex' }}
            ml={10}
            alignItems={'center'}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          <Flex
            display={{ base: 'flex', md: 'flex', lg: 'none' }}>
            <IconButton
              onClick={onToggle}
              bg='white'

              icon={
                isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={9} h={9} />
              }
              variant={'ghost'}
              color='primary'
              aria-label={'Toggle Navigation'}
            />
          </Flex>

        </Stack>
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
      >
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'primary';
  const linkHoverColor = 'hoverone'
  const popoverContentBgColor = 'gray';

  return (
    <Stack direction={'row'} spacing={5} fontFamily='heading'>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NextLink
                href={navItem.href ?? '#'}
              >
                <Link
                  p={2}
                  fontSize={'md'}
                  fontWeight='bold'
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }, NavItem) => {
  return (
    <NextLink
      href={href}
      fontFamily='heading'
    >
      <Link
        //href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover='hoverone'>
        <Stack direction={'row'} align={'center'}>
          <Box>

            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#000080' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'#000080'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      fontFamily='heading'
      bg='white'
      p={4}
      display={{ lg: 'none' }}
      borderBottom='2px solid'
      borderBottomColor='primary'
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }, NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={children && onToggle}
    >
      <Flex
        py={2}
        as={Link}
        justify={'space-between'}
        align={'center'}
        transition={'all .3s ease'}
        _hover={{
          textDecoration: 'none',
          color: 'red'
        }}>
        <NextLink
          href={href ?? '#'}
        >
          <Text
            transition={'all .3s ease'}
            _hover={{ color: 'red' }}
            fontWeight={600}
            color='gray.600'
          >
            {label}
          </Text>
        </NextLink>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor='gray.700'
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <NextLink
                key={child.label}
                href={child.href}
              >
                <Link
                  py={2}
                  transition={'all .3s ease'}
                  _hover={{ color: 'primary' }}
                >
                  {child.label}
                </Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack >
  );
};


const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Legal Episodes',
    href: '/legalepisodes'
  },
  {
    label: 'Services',
    href: '/services'
  },
  {
    label: 'Reports',
    href: '/reports'
  },
  {
    label: 'About Us',
    href: '/aboutus'
  },
  {
    label: 'Contact Us',
    href: '/contactus'
  }
];

export default Header;
