import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaApple, FaMoon, FaSun } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="full"
      px={{
        base: "10",
        md: "10",
        lg: "32",
      }}
      py="6"
      align="center"
      justifyContent="space-between"
    >
      <Text
        cursor="pointer"
        fontSize="lg"
        fontWeight="bold"
        textTransform="uppercase"
      >
        logo
      </Text>
      <Flex w="12rem" gap="20" align="center">
        <IconButton
          icon={
            colorMode === "light" ? <MdWbSunny fill="orange" /> : <FaMoon />
          }
          cursor="pointer"
          onClick={toggleColorMode}
        />
        <Button color="white" bg="#378bb5">
          Resume
        </Button>
      </Flex>
    </Flex>
  );
};
