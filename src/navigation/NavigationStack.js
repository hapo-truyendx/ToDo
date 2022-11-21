import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateScreen from '../screen/CreateTask/createTask';
import DetailTaskScreen from '../screen/DetailTask/detailTask';
import HomeScreen from '../screen/Home/home';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailTaskScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
