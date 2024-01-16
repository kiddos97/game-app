import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default NavBar;
