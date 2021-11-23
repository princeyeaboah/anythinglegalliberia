import {
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;