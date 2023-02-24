import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image } from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Call(){
  return (
    <>
          <Nav />

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="https://cdn.saudigates.net/wp-content/uploads/2022/04/%D8%A7%D9%85%D8%A7%D9%83%D9%86-%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          mx={"50"}
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color="brand.600"
          _dark={{ color: "gray.300" }}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Vist Ryiadh City
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="brand.600"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          We&apos;re here to help
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color="brand.600"
          _dark={{ color: "gray.400" }}
          letterSpacing="wider"
        >
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            _light={{ color: "white" }}
            
            bg="gray.400"
            _dark={{ bg: "brand.500" }}
            _hover={{
              bg: "brand.700",
              _dark: { bg: "brand.600" },
            }}
          >
            Visit the Help Centre
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
    <Footer/>
    </>
  );
};

