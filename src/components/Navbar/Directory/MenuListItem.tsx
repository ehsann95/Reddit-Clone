import React from "react";
import { Flex, Icon, MenuItem, Image } from "@chakra-ui/react";
import { IconType } from "react-icons";

type DirectoryItemProps = {
  displayText: string;
  link: string;
  icon: IconType;
  iconColor: string;
  imageURL?: string;
};

const MenuListItem: React.FC<DirectoryItemProps> = ({
  displayText,
  link,
  icon,
  iconColor,
  imageURL,
}) => {
  return (
    <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{ bg: "gray.100" }}
      onClick={() => {}}
    >
      <Flex alignItems="center">
        {imageURL ? (
          <Image
            alt=""
            borderRadius="full"
            boxSize="18px"
            src={imageURL}
            mr={2}
          />
        ) : (
          <Icon fontSize={20} mr={2} as={icon} color={iconColor} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  );
};
export default MenuListItem;
