import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import Disciplinas from './Disciplinas'

const DisciplinasForm = ({navigation}) => {

  const [dados, setDados] = useState({})

  function handleChange(valor, campo) {
    setDados({...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('cursos').then(resultado => {
      
      const cursos = JSON.parse(resultado) || []
      
      cursos.push(dados)
      console.log(cursos)
  
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
  
      navigation.goBack()
    })


  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de Curso</Text>

      <TextInput
        style={{ marginTop: 10 }}
        mode='outlined'
        label='Nome'
        value={dados.nome}
        onChangeText={(valor) => handleChange(valor, 'nome')}
      />

      <TextInput
        style={{ marginTop: 10 }}
        mode='outlined'
        label='CursoId'
        keyboardType='decimal-pad'
        
        value={dados.duracao}
        onChangeText={(valor) => handleChange(valor, 'cursoId')}
      />

     
      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  )
}

export default DisciplinasForm