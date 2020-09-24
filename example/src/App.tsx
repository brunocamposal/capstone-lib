import React from 'react'

// Importar o seu componente para testar
import { Grid, Button, Input } from 'capstone-lib'

//Colocar componente um em baixo do outro para ir testanto
const App = () => {
  return (
    <>
      <Grid> OLA </Grid>
      <Button>Button</Button>
      <Input type='text' />
     </>
  )
}

export default App
