import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="textSecondary" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Nguyen Anh Minh, currently an undergraduate looking to
              improve my knowledge in web development. <br />
              I attend at
              <MoreInfo
                text="Corvinus University of Budapest"
                content={
                  <Image
                    w={525}
                    h={85}
                    src="https://i.imgur.com/2PyRnub.png"
                    alt="BCE"
                  />
                }
              />
              and will major in business management. My programming journey
              kickstarted when I found this cool site called
              <MoreInfo
                text="The Odin Project"
                content={
                  <Image
                    w={500}
                    h={70}
                    src="https://i.imgur.com/l5TAe5M.png"
                    alt="TOP"
                  />
                }
              />
              where I picked up the Full-Stack Javascript path. <br />
              The main area of my expertise is{' '}
              <MoreInfo
                text="Front End Development."
                content={
                  "because it's always evolving and changing, allowing me to satisfy my creativity, and I enjoy interacting with clients"
                }
              />
              I build small and medium web apps using ReactJS on the
              client-side and ExpressJS for the backend.
              <br />
              <br />
              Outside of coding, I enjoy video games, playing football and
              snowboarding 🎮⚽🏂.
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt="Nguyen Anh Minh"
              />
              <Image
                src="https://i.imgur.com/WdtMpfl.jpg"
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                borderRadius={'50%'}
                alt="Nguyen Anh Minh"
                zIndex={5}
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
