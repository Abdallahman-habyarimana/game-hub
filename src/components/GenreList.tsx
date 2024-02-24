import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenre'

const GenreList = () => {
    const { data, isLoading, error } = useGenres()
    if(error) return;
    if(isLoading) return <Spinner />
  return (
    <List>
        {data.map(genre => (
            <ListItem key={genre.id} py='5px'>
                <HStack>
                    <Image 
                        boxSize='32px' 
                        borderRadius={8} 
                        src={genre.image_background} />
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>
    ))}
    </List>
  )
}

export default GenreList