import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Disciplinas from './Disciplinas';
import DisciplinasForm from './DisciplinasForm';

const Stack = createNativeStackNavigator();

const DisciplinasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="disciplinas" component={Disciplinas} options={{ title: 'Disciplinas' }} />
                <Stack.Screen name="disciplinas-form" component={DisciplinasForm} options={{ title: 'Disciplinas' }} />
            </Stack.Navigator>
        </>
    )
}

export default DisciplinasStack