import { Platform } from "../hooks/useGames.ts";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  MdPhoneIphone,
  SiNintendo,
  BsGlobe,
} from "react-icons/all";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color="gray.500"
          key={platform.id}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
