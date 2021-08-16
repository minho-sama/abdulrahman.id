import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Keep In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="textSecondary" textAlign="center">
            I'm currently open to work as a{' '}
            <chakra.span
              color="button1"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              Front-end Developer.
            </chakra.span>
            <br /> Let's get in touch and talk more about your projects.
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Stack isInline spacing={4}>
            <Link
              href="https://www.linkedin.com/in/nguyen-anh-minh-hu/"
              isExternal
              onClick={() => handleClick('contact_linkedin')}
            >
              <Button
                leftIcon={<FaLinkedin fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                bgColor = "#FFFFFF14"
                _hover={{
                  background: "whiteAlpha.300",
                }}
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:n.a.minh1106@gmail.com"
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                bgColor = "#FFFFFF14"
                _hover={{
                  background: "whiteAlpha.300",
                }}
              >
                Email
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1qOCNeJS7sUoiNWO22xYXMN2Bf8-dWd8D/view?usp=sharing"
              isExternal
              onClick={() => handleClick('contact_resume')}
            >
              <Button
                leftIcon={<FaFileAlt fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                bgColor = "#FFFFFF14"
                _hover={{
                  background: "whiteAlpha.300",
                }}
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
