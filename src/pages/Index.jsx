import { Container, VStack, Box, Text, IconButton, Flex, useBreakpointValue } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          Note Taking App
        </Text>
      </Flex>

      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Box
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg="white"
          >
            <Text fontSize="xl" fontWeight="bold">
              Note Title
            </Text>
            <Text mt={2}>
              Note content goes here. This is a sample note to demonstrate the layout.
            </Text>
          </Box>
          <Box
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg="white"
          >
            <Text fontSize="xl" fontWeight="bold">
              Another Note Title
            </Text>
            <Text mt={2}>
              More note content goes here. This is another sample note to demonstrate the layout.
            </Text>
          </Box>
        </VStack>
      </Box>

      <IconButton
        icon={<AddIcon />}
        colorScheme="blue"
        size="lg"
        isRound
        position="fixed"
        bottom={isMobile ? "20px" : "40px"}
        right={isMobile ? "20px" : "40px"}
        aria-label="Add Note"
      />
    </Container>
  );
};

export default Index;