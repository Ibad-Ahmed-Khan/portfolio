import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import ServicesCard from "./ServicesCard";

export const Services = () => {
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
      spacing="4"
    >
      <Text fontSize="4xl">services i offer</Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut inventore
        maxime ratione quidem vitae incidunt odio dignissimos reprehenderit
        doloribus dolorem placeat illum, consequatur minus nesciunt beatae.
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut inventore
        maxime.
      </Text>
      <ServicesCard />
    </VStack>
  );
};
