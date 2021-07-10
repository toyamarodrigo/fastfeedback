import React from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";

const AddSiteModal = () => {
  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      settings: {
        icons: true,
        timestamp: true,
        ratings: false,
      },
    };

    const { id } = createSite(newSite);

    toast({
      title: "Success!",
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // mutate(
    //   ["/api/sites", auth.user.token],
    //   async (data) => ({
    //     sites: [{ id, ...newSite }, ...data.sites],
    //   }),
    //   false,
    // );
    onClose();
  };

  return (
    <>
      <Button
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
        _hover={{ bg: "gray.700" }}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        id="add-site-modal-button"
        onClick={onOpen}
      >
        Add your First Site
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                {...register("name", { required: true })}
                id="site-input"
                name="name"
                placeholder="My site"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                {...register("url", { required: true })}
                id="link-input"
                name="url"
                placeholder="https://website.com"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button fontWeight="medium" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              id="create-site-button"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
