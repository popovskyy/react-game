import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const header = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="50px" marginBottom={"20px"}>
      {header}
    </Heading>
  );
};

export default GameHeading;
