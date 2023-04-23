import React, { useState, useEffect } from "react";
import { auth, provider, db } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { Box, Text, Button, Heading } from "@chakra-ui/react";

const Forum = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      navigate("/forum/createpost");
    });
  };

  return (
    <>
      <Heading
        marginStart={"10%"}
        color={"blackAlpha"}
        textAlign={"center"}
        fontSize={"40px"}
        fontWeight={"600"}
        mb="10px"
      >
        Community Forum
      </Heading>
      <Box className="loginPage">
        <Button
          marginTop={"10px"}
          marginLeft={"45%"}
          type="submit"
          w="20%"
          _hover={{ background: "#8cbaff" }}
          color="blackAlpha.600"
          onClick={signInWithGoogle}
        >
          Create and Share With Community
        </Button>
      </Box>
      <Box
        w="50%"
        h="400px"
        p="2rem"
        marginTop={"20px"}
        marginStart={"30%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        gap="20px"
        borderRadius={"70px"}
        boxShadow={"0px 5px 20px rgba(0,0,0,0.140)"}
        overflowY={"scroll"}
      >
        {postLists.map((post) => {
          return (
            <Box className="post">
              <Box className="postHeader">
                <Box className="title">
                  <Heading
                    color={"blackAlpha"}
                    textAlign={"center"}
                    fontSize={"30px"}
                    fontWeight={"600"}
                    mb="10px"
                  >
                    {" "}
                    {post.title}
                  </Heading>
                </Box>
                <Box className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <Button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      {" "}
                      &#128465;
                    </Button>
                  )}
                </Box>
              </Box>
              <Box
                color={"blackAlpha"}
                textAlign={"center"}
                fontSize={"20px"}
                fontWeight={"400"}
                mb="10px"
              >
                {" "}
                {post.postText}{" "}
              </Box>
              <Text
                color={"blackAlpha"}
                textAlign={"center"}
                fontSize={"15px"}
                fontWeight={"600"}
                mb="10px"
              >
                @{post.author.name}
              </Text>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Forum;
