import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { User } from "firebase/auth";
import Icons from "./Icons";
import MenuWrapper from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <Flex>
      <AuthModal />
      <Flex justify="center" align="center"></Flex>
      {user ? <Icons /> : <AuthButtons />}
      <MenuWrapper />
    </Flex>
  );
};
export default RightContent;
