import Home from '@pages/Home/Index';
import Interaction from '@pages/interaction/Index';
import Profile from '@pages/profile/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@screens/Header';
import HeaderScreen from '@screens/Header';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Tabs = AnimatedTabBarNavigator();

const TabsRoute = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: 'black',
      }}>
      {tabNavigates?.map((value, key) => (
        <Tabs.Screen
          key={key}
          tabBarVisible={false}
          name={value?.path}
          component={value?.component}
          header={HeaderScreen}
          options={{
            tabBarIcon: value?.tabBarIcon
              ? value?.tabBarIcon
              : ({focused, color, size}) => (
                  <Icon
                    name={value?.iconName}
                    size={size ? size : 24}
                    color={focused ? color : '#222222'}
                    focused={focused}
                  />
                ),
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};

export default TabsRoute;
