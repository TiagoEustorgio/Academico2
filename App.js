import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Cursos from './screens/cursos/Cursos';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CursoStack from './screens/cursos/CursoStack';
import AlunosStack from './screens/alunos/AlunosStack';
import ProfessoresStack from './screens/professores/ProfessoresStack';
import DisciplinasStack from './screens/disciplinas/DisciplinasStack';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Cursos"
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="movie-open" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Disciplinas"
              component={DisciplinasStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-variant" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Alunos"
              component={AlunosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="human-handsup" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Professores"
              component={ProfessoresStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-tie" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Turmas"
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="google-classroom" size={26} />
                ),
              }}
            />


          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>

    </>
  );
}
