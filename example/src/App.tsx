import React from 'react'
import { Grid, Card } from 'capstone-lib'
// import 'capstone-lib/dist/index.css'

// Importar o seu componente para testar


//Colocar componente um em baixo do outro para ir testanto
const App = () => {
  return (
    <>
      <Card
        title="Thomas Shelby"
        imgUrl="https://pbs.twimg.com/media/EV2f0kBWAAUX70U.jpg"
        description="Mito"
      />
      <Grid> OLA </Grid>
    </>
  )
}

export default App
