import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      justifyContent={"center"}
    >
      <Button mx={"14"} color={"white"} variant={"unstyled"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button mx={"14"} color={"white"} variant={"unstyled"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
      <Button mx={"14"} color={"white"} variant={"unstyled"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
    </HStack>
  );
}

export default Header