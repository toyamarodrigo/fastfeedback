import React from "react";
import Head from "next/head";
import { Button, Code, Heading, Icon, Text, Flex } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex alignItems="center" as="main" direction="column" h="100vh" justifyContent="center">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading>Fast Feedback</Heading>
      <Icon color="black" name="logo" size="32px" />

      {auth.user ? (
        <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signInWithGithub()}>Sign In</Button>
      )}

      <Text>
        USER: <Code>{auth?.user?.email}</Code>
      </Text>
    </Flex>
  );
}
