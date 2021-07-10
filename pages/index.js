import React from "react";
import Head from "next/head";
import { Button } from "@chakra-ui/react";

import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      {auth?.user ? (
        <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signInWithGithub()}>Sign In</Button>
      )}
      <main>USER: {auth?.user?.email}</main>
    </>
  );
}
