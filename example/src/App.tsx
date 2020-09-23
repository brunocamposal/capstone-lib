import React from 'react'

import 'capstone-lib/dist/index.css'

// Importar o seu componente para testar
import { Grid, Col, Button } from 'capstone-lib'

//Colocar componente um em baixo do outro para ir testanto
const App = () => {
  return (
    <>
      <h1> Grid </h1>
      <Grid>
        <Col width={12} backgroundColor='#E6C79C'>
          12
        </Col>
        <Col width={6} backgroundColor='#6FD08C'>
          6
        </Col>
        <Col width={6} backgroundColor='#6FD08C'>
          6
        </Col>
        <Col width={4} backgroundColor='#EDB458'>
          4
        </Col>
        <Col width={4} backgroundColor='#EDB458'>
          4
        </Col>
        <Col width={4} backgroundColor='#EDB458'>
          4
        </Col>
        <Col width={4} backgroundColor='#EDB458'>
          4
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
        <Col width={2} backgroundColor='#7B9EA8'>
          2
        </Col>
      </Grid>
      <Button>Button</Button>
    </>
  )
}

export default App
