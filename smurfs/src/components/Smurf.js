import React from 'react';
import styled from 'styled-components'

import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const Wrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  color: #282c34;
`

const Flexer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 2%;
`

const SmurfFlexer = styled.div`
  display: flex; 
  align-items: center;
  flex-direction: column;
  padding-bottom: 5%
  margin-bottom: 2%
`

const Smurf = props => {
  console.log(props)
  return(
    <Wrapper>
      <Card>
        <CardBody>
          <Flexer>
            <SmurfFlexer>
          <CardTitle>Name: {props.smurf.name}</CardTitle>
          <CardSubtitle>Age: {props.smurf.age}</CardSubtitle>
          <CardSubtitle>Height: {props.smurf.height}</CardSubtitle>
          </SmurfFlexer>
      <Button color="danger" onClick={()=>{props.deleteSmurf(props.smurf.id); window.location.reload(false)}}>X</Button>
      </Flexer>
        </CardBody>
      </Card>
    </Wrapper>
)}

export default Smurf