import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import PortfolioImg from "./PortfolioImg";

export const Portfolio = () => {
  return (
    <VStack
      mt="10"
      mb="40"
      px={{
        base: "10",
        md: "20",
        lg: "32",
      }}
      w="full"
      align="flex-start"
      spacing="10"
    >
      <Text fontSize="4xl">Portfolio</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe
        eum numquam aspernatur maxime, error odio, quasi rerum ullam excepturi
        quo ducimus cum. Laudantium, cupiditate magnam rem in tempore commodi.
      </Text>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <PortfolioImg />
    </VStack>
  );
};
