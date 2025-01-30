import AccordianHeader from '@components/accordian/AccordianHeader';
import Container from '@components/container/Index';
import Theme from '@themes/Index';
import {Image, ScrollView, Text, View} from 'react-native';
import Category from './components/Category';
import Accordian from '@components/accordian/Accordian';
import AccordianBody from '@components/accordian/AccordianBody';
import Task from './components/task/Task';
import FloatingButton from '@components/button/FloatingButton';
import Images from '@constants/Image';

export const Home = props => {
  return (
    <View
      style={{
        backgroundColor: Theme.colors.light,
        flex: 1,
        position: 'relative',
      }}>
      <Container>
        <ScrollView contentContainerStyle={{gap: 16, paddingTop: 10}}>
          <Accordian>
            <AccordianHeader>
              <Category user="DJ" category={'Design Team'} totalTimer={2} />
            </AccordianHeader>
            <AccordianBody>
              <Task
                title={'Homepage Design'}
                duration={'10s'}
                status={'Pending'}
              />
            </AccordianBody>
          </Accordian>
        </ScrollView>
      </Container>
      <FloatingButton>
        <Image style={{width: 24, height: 24}} source={Images.add} />
        <Text style={{fontSize: 16, color: 'white', fontWeight: 700}}>
          Create
        </Text>
      </FloatingButton>
    </View>
  );
};
