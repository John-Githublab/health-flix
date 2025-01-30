import Container from '@components/container/Index';
import Theme from '@themes/Index';
import {ScrollView, Text, View} from 'react-native';

export const Home = props => {
  return (
    <View
      style={{
        backgroundColor: Theme.colors.light,
        flex: 1,
      }}>
      <Container>
        <ScrollView contentContainerStyle={{gap: 16}}>
          <Text>Hello world</Text>
        </ScrollView>
      </Container>
    </View>
  );
};


