import React from "react";
import { Heading, Text, Flex, Button } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        align="center"
        backgroundColor="white"
        borderRadius="8px"
        direction="column"
        justify="center"
        p={16}
        width="100%"
      >
        <Heading mb={2} size="lg">
          You haven’t added any sites.
        </Heading>
        <Text mb={4}>Let’s get started.</Text>
        <Button>Upgrade to Starter</Button>
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;
