import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Link,
  Button,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  //if (error) return null;
  if (isLoading) return <Spinner />;

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
            <Button
              onClick={() => console.log(genres)}
              fontSize="lg"
              variant="link"
            >
              {genres.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
