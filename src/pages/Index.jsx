import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding online. Start your journey with us today!</Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src="/images/online-learning.png" alt="Online Learning" boxSize="200px" />
        </Box>
        <VStack spacing={4}>
          <Button leftIcon={<FaCode />} colorScheme="teal" size="lg">Start Learning</Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="teal" size="lg">Browse Courses</Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="teal" size="lg">Meet Our Instructors</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;