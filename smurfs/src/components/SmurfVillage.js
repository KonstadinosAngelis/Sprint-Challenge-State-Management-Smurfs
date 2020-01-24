import React, { useContext } from 'react'
import styled from 'styled-components'

import { SmurfContext } from '../contexts/smurfContext'

import Smurf from './Smurf'
import axios from 'axios'

const Wrapper = styled.div`
  width: 100%
  border: 1px solid red;
  display: flex;
`

const SmurfVillage = (prop) => {
  const smurfContext = useContext(SmurfContext)
  
  const deleteSmurf = id => {
    smurfContext.forEach(element => {
      if(id === element.id){
        axios.delete(`http://localhost:3333/smurfs/${element.id}`)
      }
    });
  }

  return(
    <Wrapper>
      {smurfContext.map((smurf)=> <Smurf key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf} id={smurf.id}/>)}
    </Wrapper>
  )}

  export default SmurfVillage