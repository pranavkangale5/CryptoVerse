import React, { useState } from "react";
import { Box, Text, Input, Button, Spinner, useToast } from "@chakra-ui/react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { AiFillDelete } from "react-icons/ai";

const Wallet = () => {
  const [coin, setcoin] = useState(`Bitcoin`);
  const [kete, setkete] = useState(0);
  const [price, setprice] = useState(0.0);

  const [woth, setworth] = useState({
    coins: 0,
    totalprice: 0.0,
  });

  const [result, setresult] = useState([
    {
      name: "",
      price: 0,
      kiti: 0,
    },
  ]);

  const toast = useToast();

  const patav = async (e) => {
    e.preventDefault();

    if (coin === "" || kete === 0) {
      toast({
        position: "top",
        description: `Not picked`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    const a = parseInt(kete);

    const ans = woth.totalprice + price * kete;
    setworth({
      totalprice: ans,
      coins: woth.coins + a,
    });

    const newer = {
      name: coin,
      price: price,
      kiti: kete,
    };

    for (let i = 0; i < result.length; i++) {
      if (result[i].name.toString() === coin.toString()) {
        toast({
          position: "top",
          description: `This Coind Alredy Present`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
    }
    await setresult([...result, newer]);

    await toast({
      position: "top",
      description: `Added ${kete} ${coin}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    console.log(result);
  };

  const hellow = async (e) => {
    e.preventDefault();
    await setkete(e.target.value);
  };

  const pranav = async (e, name, price) => {
    e.preventDefault();
    await setcoin(name);
    await setprice(price);
  };

  const deletethis = (e, name, price, kiti) => {
    e.preventDefault();

    const newresult = result.filter((item) => {
      return item.name !== name;
    });

    setresult(newresult);
    setworth({
      coins: woth.coins - kiti,
      totalprice: woth.totalprice - price * kiti,
    });
    toast({
      position: "top",
      description: `Coin Removed`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const count = 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  return isFetching ? (
    <Spinner color="black" size={"xl"} />
  ) : (
    <>
      <Text
        textAlign={"center"}
        color={"black"}
        mt="-4"
        fontSize={"5vmin"}
        fontWeight={"700"}
      >
        WALLET
      </Text>
      <Box
        color="black"
        h="fit-content"
        mb={{ base: "0", md: "0", lg: "5rem" }}
        display={"flex"}
        flexDir={"column"}
        overflowY={"scroll"}
        p="2rem"
        gap="20px"
      >
        <Box
          display={"flex"}
          alignContent={"start"}
          flexDir={{ base: "column", md: "row" }}
          w="100%"
          h="50%"
          flexWrap={"wrap"}
          gap="20px"
        >
          <Box
            w={{ base: "100%", md: "48%" }}
            display={"flex"}
            flexDir={"column"}
            p="10px"
            justifyContent={"space-around"}
            boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
            alignItems={"center"}
            overflowY={"scroll"}
          >
            <Box
              w="50%"
              overflowX={"scroll"}
              maxH="100%"
              display={"flex"}
              alignItems={"center"}
              boxShadow="0px 5px 20px rgba(0,0,0,0.140)"
            >
              <Box display={"flex"} outline={"none"} h="50px">
                {cryptosList === undefined ? (
                  <Spinner color="black" size={"xl"} />
                ) : (
                  cryptosList?.data.coins.map((item, index) => (
                    <Button
                      key={index}
                      onClick={(e) => pranav(e, item.name, item.price)}
                      w="fit-content"
                      fontSize={"18px"}
                      variant={"ghost"}
                      colorScheme="black"
                      color={"blackAlpha.700"}
                    >
                      {item.name}
                    </Button>
                  ))
                )}
              </Box>
            </Box>
            <Box
              color={"black"}
              w="30%"
              h="fit-content"
              borderRadius={"10px"}
              background={"white"}
              boxShadow="0px 5px 20px rgba(0,0,0,0.140)"
            >
              <Input
                type="number"
                min={0}
                value={kete}
                onChange={(e) => hellow(e)}
                outlineColor={"white"}
              />
            </Box>
            <Box>
              <Button
                boxShadow="0px 5px 20px rgba(0,0,0,0.140)"
                variant={"ghost"}
                color={"black"}
                onClick={(e) => patav(e)}
              >
                Add +
              </Button>
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "48%" }}
            border={"none"}
            boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
            p="1% 2%"
          >
            <Text
              textAlign={"center"}
              fontSize={"3vmin"}
              mb="40px"
              fontWeight={"600"}
            >
              All Collection
            </Text>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap="20px"
              w="100%"
              h="100px"
              overflow={"scroll"}
            >
              {result !== undefined ? (
                result.map((item) =>
                  item.kiti !== 0 ? (
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-around"}
                      w="100%"
                    >
                      <Text>{item.name}</Text>
                      <Text>{item.price}</Text>
                      <Text>{item.kiti}</Text>
                      <AiFillDelete
                        cursor={"pointer"}
                        onClick={(e) =>
                          deletethis(e, item.name, item.price, item.kiti)
                        }
                      />
                    </Box>
                  ) : null
                )
              ) : (
                <Spinner color="black" size={"xl"} />
              )}
            </Box>

            <Box w="100%" mt="50px">
              <Text
                fontSize={"2.6vmin"}
                textAlign={"center"}
                fontWeight={"600"}
              >
                TOTTAL WORTH
              </Text>
              <Box
                display={"flex"}
                mt="20px"
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Text fontSize={"2.2vmin"} fontWeight={"600"}>
                  {`${woth.coins}`}
                </Text>
                <Text fontSize={"2.2vmin"} fontWeight={"600"}>
                  {`${woth.totalprice}`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w="100%">
          <Text
            fontSize={"7vmin"}
            fontWeight={"800"}
            color={"blackAlpha.400"}
            textAlign={"center"}
          >
            Hope You Liked It !!
          </Text>
        </Box>
      </Box>
    </>
  );
};

const log = () => {
  return <Box></Box>;
};

export default Wallet;
