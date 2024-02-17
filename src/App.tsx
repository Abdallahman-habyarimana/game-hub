

import React from 'react'
import { Grid, GridItem, Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'

const App = () => {
  console.log(import.meta.env.VITE_);
  return (
    <Grid templateAreas={{
      base: `"nav" main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside">
          Aside
      </GridItem>
      <GridItem area="main">
          <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App