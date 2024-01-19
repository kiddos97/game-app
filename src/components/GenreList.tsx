import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genres.image_background}
            />
            <Text fontSize="lg">{genres.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
