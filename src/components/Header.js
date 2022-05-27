import { useColorMode } from "@chakra-ui/color-mode"
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex, Box, Text,  } from "@chakra-ui/layout";
import { Button, ButtonGroup, Image } from '@chakra-ui/react'
import React from 'react'

 
export default function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("min-width=600px");

  return (
  <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start" >
          <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf="flex-start" >
            <Text fontSize="5xl" fontWeight="semibold" >Hi, i am </Text>
            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Gael Mahe</Text>
            <Text color={isDark ? "gray.200" : "gray.500"} >Front-end developer fiable, doté d'une solide éthique de travail. Adepte du travail multitâche, capable de mener à bien des projets simultanés de création et de pages Web .</Text>
            <Button mt={8} colorScheme="blue" onClick={() => window.open("mailto:webfusionfr@gmail.com")} >Hire Me</Button>
          </Box>
      </Flex>
  </Stack>
  )
}
