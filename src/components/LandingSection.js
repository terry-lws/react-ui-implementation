import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";
import landingBg from "../images/shutterstock_1194279880_Blue-extended-lighter.jpg";

const firstLine = "CHALLENGE YOUR STUDENTS ON THE WORLD STAGE";
const secondLine = "A test page to demonstrate my skills";
const thirdLine =
  "Motivate top-performing students, assess their progress, and celebrate their achievements.";

const LandingSection = () => {
  return (
    <Box
      display="flex"
      flex="1 1 auto"
      alignItems="center"
      minHeight="100vh"
      bg={`url(${landingBg})`}
      bgSize="cover"
      backgroundRepeat="no-repeat"
    >
      <VStack
        my={{ base: "none", md: "300" }}
        mx={{ base: "none", md: "150" }}
        maxWidth="1280px"
        alignItems="flex-start"
        justifyContent="top"
        position="relative"
        color="#000000"
        fontFamily="'Poppins', sans-serif"
        textAlign="left"
      >
        <Box w={{ base: "none", lg: "70%" }} p={10}>
          <Text fontSize={{ base: "14", md: "18" }}>{firstLine}</Text>
          <Text fontSize={{ base: "30", md: "52" }} fontWeight="400" pt={13}>
            {secondLine}
          </Text>
          <Text fontSize={{ base: "16", md: "20" }}>{thirdLine}</Text>
            <button
              className="landing-button"
              style={{
                fontFamily: "Arial",
                borderRadius: "65px",
                padding: "20px 40px",
                fontSize: "18px",
                marginTop: "1.438rem",
                fontWeight: "400",
              }}
            >
              Find out more
            </button>
        </Box>
      </VStack>
    </Box>
  );
};

export default LandingSection;
