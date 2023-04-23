import { Box, Text, Button, Input } from "@chakra-ui/react";

import React from "react";
const Feedback = () => {
  return (
    <form
      action="https://formspree.io/f/mknakqjj"
      method="POST"
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        w="40%"
        p="2rem"
        display={"flex"}
        flexDir={"column"}
        gap="20px"
        boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
      >
        <Text
          color={"blackAlpha.700"}
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={"600"}
          mb="10px"
        >
          FeedBack Form
        </Text>
        <Input
          type="text"
          color={"blackAlpha.600"}
          outline={0}
          boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
          _focus={{
            boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
            border: "none",
          }}
          placeholder="Enter your name "
        />
        <Input
          type="email"
          name="email"
          color={"blackAlpha.600"}
          outline={0}
          boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
          _focus={{
            boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
            border: "none",
          }}
          placeholder="Enter your Email "
        />
        <Input
          type="textarea"
          name="message"
          color={"blackAlpha.600"}
          outline={0}
          boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
          _focus={{
            boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
            border: "none",
          }}
          placeholder="Enter your Feedback "
        />

        <Button
          variant="ghost"
          type="submit"
          color="blackAlpha.600"
          colorScheme="black"
        >
          Send
        </Button>
      </Box>
    </form>
  );
};

export default Feedback;
