import React, { useState } from 'react'
import { Input } from 'reactstrap'

import styled from 'styled-components';

import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%
`
const ButtonStyle = styled.button`
  width: 100%
`

const FormWrapper = styled.div`
  padding-bottom: 5%
`

const AddSmurfForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('')

  const onChange = e => {
    e.preventDefault()
    return e.currentTarget.name === "smurfName" ? setName(e.target.value) :
    e.currentTarget.name === "smurfAge" ? setAge(e.target.value) :
    e.currentTarget.name === "smurfHeight" ? setHeight(e.target.value):
    null
  }

  let idIterator = 2

  const addSmurf = smurf => {
    idIterator++
    axios.post(`http://localhost:3333/smurfs`, {
      name: name,
      age: age,
      height: height + "cm" ,
      id: idIterator
    }).catch(err => console.log(err))
  }

  return(
    <Wrapper>
      <form>
<FormWrapper>
          <Input 
          type="text"
          name="smurfName"
          onChange={onChange}
          value={name}
          placeholder="Smurf's Name"
          />
</FormWrapper>

<FormWrapper>
          <Input 
          type="number"
          name="smurfAge"
          onChange={onChange}
          value={age}
          placeholder="Smurf's Age"
          />
</FormWrapper>
        
<FormWrapper>
          <Input 
          type="number"
          name="smurfHeight"
          onChange={onChange}
          value={height}
          placeholder="Smurf's Height"
          />
</FormWrapper>

        <ButtonStyle color="primary" size="sm" onClick={addSmurf}>Add Smurf!</ButtonStyle>
      </form>
    </Wrapper>
)}

export default AddSmurfForm