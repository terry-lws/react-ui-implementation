import {
  Box,
  HStack,
  Image,
  Text,
  Drawer,
  Flex,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../images/logo.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      color="#2F2F2F"
      position="absolute"
      background="#ffffff"
      h={95}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      alignItems="center"
      zIndex="1"
    >
      <Flex
        maxWidth="1280px"
        margin={{ base: "0 auto", lg: "0 auto 0 150px" }}
        display="flex"
      >
        <HStack spacing="72px">
          <HStack spacing="12px">
            <div type="button">
                <Image src={logo} width="90px" height="30px" alt="logo" />
            </div>
            {!isMobile && (
              <Text
                display="flex"
                fontSize="14.5px"
                fontFamily="Poppins"
                textAlign="left"
              >
                Online Service
                <br />
                Test page
              </Text>
            )}
          </HStack>
          {isMobile && (
            <Button bgColor="#2F2F2F" color="white" onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          )}
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
              <DrawerBody>
                  <Text type="button">Overview</Text>
                <Divider pb={2} />
                  <Text type="button">The Challenge</Text>
                <Divider pb={2} />
                  <Text type="button">Schools</Text>
                <Divider pb={2} />
                  <Text type="button">Results</Text>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <HStack
            spacing={23}
            fontFamily="Arial"
            fontSize={17}
            display={{ base: "none", lg: "flex" }}
          >
                  <Text type="button">Overview</Text>
                <Divider pb={2} />
                  <Text type="button">The Challenge</Text>
                <Divider pb={2} />
                  <Text type="button">Schools</Text>
                <Divider pb={2} />
                  <Text type="button">Results</Text>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Header;
