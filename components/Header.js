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
          justify={{ base: '', md: 'space-between' }}
          py={2}
          pr={8}
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
            height='120px'
            src="/img/liblaw_logo.jpg" />
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
          spacing={6}
        >
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
  const popoverContentBgColor = 'primary';

  return (
    <Stack direction={'row'} spacing={5} fontFamily='heading'>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NextLink
                href={navItem.href ?? '#'}
                passHref>
                <Link
                  p={2}
                  fontSize={'md'}
                  fontWeight='bold'
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: 'hoverone',
                  }}
                >
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
                minW={'sm'}
              >
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
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover='hoverone'
      passHref>
      <Stack
        direction={'row'}
        align={'center'}
      >
        <Box>
          <Text
            color='white'
            transition={'all .3s ease'}
            _groupHover={{ color: 'hoverone' }}
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
          <Icon color={'hoverone'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
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
      >
        <NextLink
          href={href ?? '#'}
          passHref>
          <Text
            transition={'all .3s ease'}
            _hover={{
              textDecoration: 'none',
              color: 'red'
            }}
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
            _hover={{ color: 'red' }}
            color='gray.600'
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
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
                color="gray.600"
                py={2}
                transition={'all .3s ease'}
                _hover={{ color: 'red' }}
              >
                {child.label}
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
    href: '/services',
    children: [
      {
        label: 'Consultancy',
        href: '/consultancy'
      }
    ]
  },
  {
    label: 'Liberian Laws',
    href: '/liberianlaws',
    children: [
      {
        label: 'Constitution',
        href: '/constitution'
      },
      {
        label: 'Statutes',
        href: '/statutes'
      },
      {
        label: 'Case Laws',
        href: '/caselaws'
      },
      {
        label: 'Executive Orders',
        href: '/executiveorder'
      },
      {
        label: 'Regulations',
        href: '/regulations'
      },
      {
        label: 'Treaties & Conventions',
        href: '/treatiesandconventions'
      }
    ]
  },
  {
    label: 'Publications',
    href: '/publications',
    children: [
      {
        label: 'Articles',
        href: '/articles'
      },
      {
        label: 'Research',
        href: 'research'
      }
    ]
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
