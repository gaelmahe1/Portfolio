import * as React from 'react'
import { IconButton } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/react'
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import Header from "./components/Header"
import Social from "./components/Social"
import Profile from "./components/Profile"


 export default function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
    <Flex w="100%">
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">FusionWeb</Heading>
    <Spacer></Spacer>
    <IconButton icon={<FaLinkedin/>} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/gael-mahe-3283521a3/")}></IconButton>
    <IconButton ml={2}icon={<FaInstagram />} isRound='true' onClick={() => window.open("https://instagram.com/gael_mahe")}></IconButton>
    <IconButton ml={2}icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/gaelmahe1")}></IconButton>
    <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} ></IconButton>
    </Flex>
    <Header></Header>
    <Social></Social>
    <Profile> </Profile>
    </VStack>
    
  )
}