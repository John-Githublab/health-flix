import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import clsx from 'clsx';
import Theme from '@themes/Index';
import CameraLib from '@features/camera/Index';
import useDocumentPicker from '@hooks/useDocumentPicker';

const MessageSend = ({handleOpenCamera, handleSendMessage}) => {
  const {chooseFiles} = useDocumentPicker();
  const [message, setMessage] = useState('');
  return (
    <View className="flex-row items-center " style={{gap: 8}}>
      <View
        style={[style.root]}
        className="flex-1 flex-row justify-between items-center  px-3   relative">
        <TextInput
          value={message}
          onChangeText={text => setMessage(text)}
          className=" flex-1"
          placeholder={'Text Message'}
        />
        <View className="flex-row  items-center" style={{gap: 16}}>
          <TouchableOpacity onPress={() => chooseFiles([''])}>
            <Entypo name="attachment" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenCamera}>
            <Feather name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={async () => {
          const response = await handleSendMessage(message);
          if (response) return setMessage('');
        }}
        style={{backgroundColor: Theme.colors.primary}}
        className={clsx(
          'w-[45] h-[45] rounded-full justify-center items-center ',
        )}>
        <MaterialIcon name="send" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1.18,
    shadowRadius: 10.59,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    borderRadius: 31,
  },
});

export default MessageSend;
