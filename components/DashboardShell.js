import React from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Link, Avatar, Icon } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" borderTop="5px solid #0AF5F4" mb={[8, 16]} w="full">
        <Flex
          alignItems="center"
          h="60px"
          justifyContent="space-between"
          margin="0 auto"
          maxW="1250px"
          pb={4}
          pt={4}
          px={8}
          w="full"
        >
          <Flex align="center">
            <NextLink passHref href="/">
              <Link>
                <Icon mr={8} name="logo" size="24px" />
              </Link>
            </NextLink>
            <NextLink passHref href="/sites">
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink passHref href="/feedback">
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <NextLink passHref href="/account">
              <Link>
                <Avatar size="sm" src={user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" margin="0 auto" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
