import { Card } from "@chakra-ui/card";
import { Game } from "../Hooks/useGames";
import { CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
