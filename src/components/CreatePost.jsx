import { Box, Text, Button, Input } from "@chakra-ui/react";

import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/forum");
  };

  return (
    <>
      <Box
        width="100%"
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="50%"
          p="2rem"
          display={"flex"}
          flexDir={"column"}
          gap="20px"
          borderRadius={"70px"}
          boxShadow="0px 5px 20px rgba(0,0,0,0.140)"
        >
          <Text
            color={"blackAlpha.700"}
            textAlign={"center"}
            fontSize={"40px"}
            fontWeight={"600"}
            mb="10px"
          >
            Create Post
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
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Input
            type="text"
            color={"blackAlpha.600"}
            outline={0}
            boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
            _focus={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
              border: "none",
            }}
            placeholder="Post "
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
          <Button
            m="auto"
            type="submit"
            w="50%"
            _hover={{ background: "#8cbaff" }}
            color="blackAlpha.600"
            onClick={createPost}
          >
            Share
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
