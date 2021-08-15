import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
  chakra,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {IoLogoNodejs} from 'react-icons/io'
import {SiTailwindcss} from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

import Image from './ChakraNextImage'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) { 
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue.200'
      values[1] = FaReact
      values[2] = 'rgba(144, 205, 244, 0.16)'
    } else if (tag == 'Python') {
      values[0] = 'orange.200'
      values[1] = FaPython
      values[2] = 'rgba(251, 211, 141, 0.16)'
    } else if (tag == 'Javascript') {
      values[0] = 'yellow.200'
      values[1] = FaJs
      values[2] = 'rgba(250, 240, 137, 0.16)'
    } else if (tag == 'Sass') {
      values[0] = 'pink.200'
      values[1] = FaSass
      values[2] = 'rgba(251, 182, 206, 0.16)'
    } else if (tag == 'MongoDB') {
      values[0] = 'green.200'
      values[1] = DiMongodb
      values[2] = 'rgba(154, 230, 180, 0.16)'
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else if(tag == 'nodejs'){
      values[0] = 'green.400'
      values[1] = IoLogoNodejs
      values[2] = 'rgba(144, 205, 244, 0.16)'
    } else if(tag == 'TailwindCSS'){
      values[0] = 'blue.100'
      values[1] = SiTailwindcss
      values[2] = 'rgba(144, 205, 244, 0.16)'
    } else {
      values[0] = 'gray.200'
      values[1] = FaCode
      values[2] = 'rgba(226, 232, 240, 0.16)'
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      color={getTag(item)[0]}
      bgColor = {getTag(item)[2]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      maxH="500px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <Link href={deployLink}>
        <ScaleFade in={true} transition={{ duration: 1 }}>
          <Image
            width={1250}
            height={600}
            w="auto"
            h="auto"
            src={imageURL}
            transition="0.3s"
            borderRadius="10px 10px 0px 0px"
            alt="project image"
          ></Image>
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
                  <Link
                    href={githubLink}
                    color="white"
                    onClick={() =>
                      handleClick(`githublink_${title.replace('@', '-at-')}`)
                    }
                    isExternal
                  >
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                    isExternal
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )}
              </Stack>
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
