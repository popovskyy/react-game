interface Props {
  score: number;
}

const CryticScore = ({ score }: Props) => {
  return <div>{score}</div>;
};

export default CryticScore;
