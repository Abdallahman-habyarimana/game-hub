

import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';
const skeletons = [1,2,3,4,5,6]

interface Props {
  selectedGenre: Genre | null
}


const GameGrid = ({selectedGenre } : Props) => {
    const { data: games, isLoading } = useGames(selectedGenre)
  return (
    <>
      <SimpleGrid columns={{
        sm: 1,
        md: 2, 
        lg: 3,
        xl: 5
      }} spacing={3} p='10px' >
        {isLoading && skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton  />
          </GameCardContainer>
        ))}
        { games.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game}/>
          </GameCardContainer>
        )
          )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid