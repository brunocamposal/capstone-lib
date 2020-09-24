import React from 'react'

// Importar o seu componente para testar
import { Grid, Figure } from 'capstone-lib/'

//Colocar componente um em baixo do outro para ir testando
const App = () => {
  return (
    <>
      <Grid> OLA </Grid>
      <Figure
        src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
        alt='Homer Simpson'
        x={180}
      />
      <Figure
        src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
        alt='Homer Simpson'
        y={260}
      />
      <Figure
        src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
        alt='Homer Simpson'
      />
    </>
  )
}

export default App
