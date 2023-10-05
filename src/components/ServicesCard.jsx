import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaHashtag, FaPaintBrush, FaThumbsUp } from "react-icons/fa";

const ServicesCard = () => {
  return (
    <Flex
      flexDirection={{
        base: "column",
        md: "column",
        lg: "row",
      }}
      gap="8"
      width="100%"
    >
      <VStack
        p={{
          base: "10",
          md: "4",
          lg: "7",
        }}
        borderRadius="lg"
        bg="white"
        spacing={4}
      >
        <Box color="skyblue" as={FaPaintBrush} size="80" fill="skyblue" />
        <Text color="black" fontWeight="semibold">
          beautiful designs
        </Text>
        <Text color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione velit
          deleniti in earum est fugit.
        </Text>
        <Text color="#378bb5">design tool i use</Text>
        <VStack>
          <Box color="black">photoshop</Box>
          <Box color="black">ilustrator</Box>
          <Box color="black">figma</Box>
          <Box color="black">indesign</Box>
        </VStack>
      </VStack>
      <VStack
        p={{
          base: "10",
          md: "4",
          lg: "7",
        }}
        borderRadius="lg"
        bg="white"
        spacing={4}
      >
        <Box color="skyblue" as={FaHashtag} size="80" fill="skyblue" />
        <Text color="black" fontWeight="semibold">
          code your dream project
        </Text>
        <Text color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione velit
          deleniti in earum est fugit.
        </Text>
        <Text color="#378bb5">design tool i use</Text>
        <VStack>
          <Box color="black">photoshop</Box>
          <Box color="black">ilustrator</Box>
          <Box color="black">figma</Box>
          <Box color="black">indesign</Box>
        </VStack>
      </VStack>
      <VStack
        p={{
          base: "10",
          md: "4",
          lg: "7",
        }}
        borderRadius="lg"
        bg="white"
        spacing={4}
      >
        <Box color="skyblue" as={FaThumbsUp} size="80" fill="skyblue" />
        <Text color="black" fontWeight="semibold">
          consulting
        </Text>
        <Text color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione velit
          deleniti in earum est fugit.
        </Text>
        <Text color="#378bb5">design tool i use</Text>
        <VStack>
          <Box color="black">photoshop</Box>
          <Box color="black">ilustrator</Box>
          <Box color="black">figma</Box>
          <Box color="black">indesign</Box>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default ServicesCard;
