import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateScreen from '../screen/CreateTask/createTask';
import DetailTaskScreen from '../screen/DetailTask/detailTask';
import IntroductionScreen from '../screen/HKApp/intro';
import LoginScreen from '../screen/HKApp/login';
import RegisterScreen from '../screen/HKApp/register';
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
        name="Intro"
        component={IntroductionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
