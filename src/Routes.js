import {Home} from '@pages/Home/Index';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {default as Header} from '@screens/Header';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
const Stack = createNativeStackNavigator();

// navigation to be move forth and back
const navigates = [
  {
    path: 'Home',
    component: Home,
    options: {},
  },
];

function Routes() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {navigates?.map((value, key) => {
          const {options, path, component} = value;
          return (
            <Stack.Screen
              key={key}
              name={path}
              options={{
                header: props => <Header {...props} />,
                headerShown: true,
                ...options,
              }}
              component={component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
