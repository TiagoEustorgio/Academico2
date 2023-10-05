import React from 'react'
import { Button, Text } from 'react-native-paper'

const Cursos = () => {
  return (
    <>
        <Text>Cursos</Text>
        <Button icon='plus' mode='contained' onPress={()=>Navigation.push('cursos-form')}>Novo</Button>
    </>
  )
}

export default Cursos