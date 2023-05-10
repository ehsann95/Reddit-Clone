import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";

// import NoUserList from "./NoUserList";
// import UserList from "./UserList";

import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { communityState } from "@/src/atoms/communitiesAtom";
// import { useRouter } from "next/router";

type MenuWrapperProps = {};

const MenuWrapper: React.FC<MenuWrapperProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);

  const onSignOut = async () => {
    await signOut();
    // redirect();
  };

  // redirect to homepage
  // let router = useRouter();
  // function redirect() {
  //   router.push("/");
  // }

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex alignItems="center">
          <Flex alignItems="center">
            {user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                  as={FaRedditSquare}
                />
                <Box
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="8pt"
                  alignItems="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split("@")[0]}
                  </Text>
                  <Flex alignItems="center">
                    <Icon as={IoSparkles} color="brand.100" mr={1} />
                    <Text color="gray.400">1 karma</Text>
                  </Flex>
                </Box>
              </>
            ) : (
              <Icon fontSize={24} mr={1} color="gray.400" as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      {user ? (
        <MenuList>
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: "blue.500", color: "white" }}
          >
            <Flex alignItems="center">
              <Icon fontSize={20} mr={2} as={CgProfile} />
              Profile
            </Flex>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: "blue.500", color: "white" }}
            onClick={onSignOut}
          >
            <Flex alignItems="center">
              <Icon fontSize={20} mr={2} as={MdOutlineLogout} />
              Log Out
            </Flex>
          </MenuItem>
        </MenuList>
      ) : (
        <MenuList>
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: "blue.500", color: "white" }}
            onClick={() => {
              setAuthModalState({ open: true, view: "login" });
            }}
          >
            <Flex alignItems="center">
              <Icon fontSize={20} mr={2} as={MdOutlineLogout} />
              Sign In
            </Flex>
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};
export default MenuWrapper;
