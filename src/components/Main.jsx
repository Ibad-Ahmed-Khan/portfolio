import { Box, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export const Main = () => {
  return (
    <VStack
      mt="10"
      mb="40"
      px={{
        base: "10",
        md: "10",
        lg: "40",
      }}
      gap="5"
    >
      <Text color="#378bb5" fontSize="4xl">
        ibad ahmed khan
      </Text>
      <Text fontSize="xl">developer and designer</Text>
      <Text textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        tempora amet quibusdam id deleniti maxime neque, numquam fugit dolore,
        consectetur a enim ratione aliquam fugiat doloribus excepturi.
      </Text>
      <Flex w="10rem" justify="space-between">
        <Link as={FaTwitter} boxSize="8" />
        <Link as={FaLinkedin} boxSize="8" />
        <Link as={FaYoutube} boxSize="8" />
      </Flex>
      <Box pt="20">
        <Image
          w="72"
          h="72"
          borderRadius="70%"
          src="https://media.istockphoto.com/id/1484169205/photo/portrait-guy-college-student-with-laptop-backpack-on-gray-background.webp?b=1&s=170667a&w=0&k=20&c=S4kOzA6QfdgdZpLINOwX8dd4wYMe37bcy2xbf-DFYrw="
        />
      </Box>
    </VStack>
  );
};
