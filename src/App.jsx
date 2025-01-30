import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Routes from './Routes';
import {Text} from 'react-native';

function App() {
  console.log('running application!');

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Routes />
    </GestureHandlerRootView>
  );
}

export default App;
