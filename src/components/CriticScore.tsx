import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 95 ? "green" : score > 80 ? "orange" : ': "red"';
  return (
    <Badge
      fontSize="14px"
      paddingX="10px"
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
