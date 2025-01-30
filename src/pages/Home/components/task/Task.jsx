import Button from '@components/button/Button';
import Hr from '@components/forms/Hr';
import Images from '@constants/Image';
import {styles} from '@pages/Home/styles/task';
import {useMemo} from 'react';
import {Image, Text, View} from 'react-native';

const Task = ({title, duration, status, startTimer}) => {
  const actions = useMemo(() => [
    {
      id: 1,
      name: 'Start',
      press: startTimer,
      icon: Images.start,
    },
    {
      id: 2,
      name: 'Pause',
      press: startTimer,
      icon: Images.pause,
    },
    {
      id: 3,
      name: 'Reset',
      press: startTimer,
      icon: Images.reset,
    },
  ]);
  return (
    <View style={styles.mainRoot}>
      <View style={styles.root}>
        <View style={styles.wrapper}>
          <View style={styles.clockIconWrapper}>
            <Image style={styles.clockIcon} source={Images.clock} />
          </View>
          <View style={styles.categoryRoot}>
            <Text style={styles.category}>{title}</Text>
            <Text style={styles.timer}>Duration : {duration}</Text>
          </View>
        </View>
        <View style={styles.statusRoot}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
      <Hr />
      <View style={styles.buttons}>
        {actions?.map(button => (
          <Button key={button?.id}>
            <Image style={styles.buttonImg} source={button.icon} />
            <Text>{button?.name}</Text>
          </Button>
        ))}
      </View>
    </View>
  );
};

export default Task;
