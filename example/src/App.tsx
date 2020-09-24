import React from 'react'

//import './index.css'

// Importar o seu componente para testar
import { Grid, Button } from 'capstone-lib'

//Colocar componente um em baixo do outro para ir testanto
const App = () => {
  const handleOnClick = () => {
    console.log("clicked !")
  }

  return (
    <>
      <Grid> OLA </Grid>
      <Button color='blue' onClick={handleOnClick}>Button</Button>
    </>
  )
}

export default App
