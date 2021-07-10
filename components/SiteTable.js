import React from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

import { Table, Tr, Th, Td } from "./Table";
import DeleteSiteButton from "./DeleteSiteButton";

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width="50px">{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <Box key={site.id} as="tr">
              <Td>
                <NextLink passHref as={`/site/${site.id}`} href="/site/[siteId]">
                  <Link fontWeight="medium" id={`site-table-link-${index}`}>
                    {site.name}
                  </Link>
                </NextLink>
              </Td>
              <Td>
                <Link isExternal href={site.url}>
                  {site.url}
                </Link>
              </Td>
              <Td>
                <NextLink passHref as={`/site/${site.id}`} href="/site/[siteId]">
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
              <Td>
                <DeleteSiteButton siteId={site.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
