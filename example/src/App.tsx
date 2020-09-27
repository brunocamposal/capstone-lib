import React from 'react'

import { Grid, Button, Input, Col, Card, Checkbox, Figure }  from 'capstone-lib'

const App = () => {

  return (
    <>
    <h2>Figure:</h2>
    <p>1. Definindo width:</p>
    <Figure
      src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
      alt='Homer Simpson'
      x={180}
    />
    <p>2. Definindo height:</p>
    <Figure
    src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
    alt='Homer Simpson'
    y={180}
    />
    <p>3. Sem definição de dimensões:</p>
    <Figure
    src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
    alt='Homer Simpson'
  />
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
      <h1> Button </h1>
      <Button color='blue' onClick={() => {}}>Button</Button>
      <h1> Input </h1>
      <Input type='text' />
      <h1> Checkbox </h1>
      <Checkbox label='Check' />
      <h1> Card </h1>
      <Card
        title="Thomas Shelby"
        imgUrl="https://i.pinimg.com/originals/0a/fd/ff/0afdff9c083f510b431a31b89b95f976.jpg"
        description="  elit. Aenean vitae suscipit est, vel ullamcorper ante. Nullam pharetra, urna at maximus fermentum, justo enim posuere mi,"
      />
      <Card
        title="Square"
        imgUrl="data:image/png;base64,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"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae suscipit est, vel ullamcorper ante. Nullam pharetra, urna at maximus fermentum, justo enim posuere mi,"
      />

    </>
  )
}

export default App
