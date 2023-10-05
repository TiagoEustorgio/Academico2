import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CursosForm from './CursosForm';
import Cursos from './Cursos';



const Stack = createNativeStackNavigator();

const CursoStack = () => {
    return (
        <>
             <Stack.Navigator>
                <Stack.Screen name="cursos" component={Cursos} options={{ title: 'Cursos' }} />
                <Stack.Screen name="cursos-form" component={CursosForm} options={{ title: 'CursosForm' }} />
                
            </Stack.Navigator>
        </>
    )
}

export default CursoStack