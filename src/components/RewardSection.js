import { VStack, Text, Box } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import rewardBg from "../images/b969baae2e97b46c1e134c7638d3c890.jpg";

const firstLine = "Rewarding student achievement";
const secondLine =
  "Medals and certificates are given to exceptional high-achievers to acknowledge their participation and outstanding performance.";

const RewardSection = () => {
  return (
    <Box
      display="flex"
      flex="1 1 auto"
      alignItems="center"
      minHeight="100vh"
      position="relative"
      textAlign="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={`linear-gradient(to left, #FFFFFF 17.22%, rgba(255, 255, 255, 0) 100%), url(${rewardBg})`}
        bgSize="cover"
        bgPosition="right"
        transform="matrix(-1, 0, 0, 1, 0, 0)"
      />
      <VStack
        my={{ base: "none", md: "60" }}
        mx={{ base: "none", md: "150" }}
        maxWidth="1280px"
        alignItems="flex-start"
        justifyContent="top"
        position="relative"
        color="#000000"
        fontFamily="'Poppins', sans-serif"
        textAlign="left"
      >
        <Box w={{ base: "none", lg: "70%" }} p={{ base: "5", lg: "10" }}>
          <Text fontSize={{ base: "20px", lg: "25px" }} fontWeight="600">
            {firstLine}
          </Text>
          <Text
            fontSize={{ base: "16px", lg: "20px" }}
            fontStyle="normal"
            fontWeight="400"
            pt="15px"
          >
            {secondLine}
          </Text>
            <button
              className="reward-button"
              style={{
                fontFamily: "Arial",
                borderRadius: "65px",
                width: "263px",
                height: "30px",
                fontSize: "15px",
                marginTop: "15px",
                fontWeight: "400",
              }}
            >
              Certificate and award criteria{" "}
              <TriangleUpIcon transform="rotate(90deg)" />
            </button>
        </Box>
      </VStack>
    </Box>
  );
};

export default RewardSection;
