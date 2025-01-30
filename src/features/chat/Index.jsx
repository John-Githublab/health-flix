import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Container from '@components/container/Index';
import MessageSend from '@features/chat/components/MessageSend';
import Images from '@constants/Image';
import SingleMessage from '@features/chat/components/SingleMessage';
import {messages} from './constants/Messages';
import {RNCamera} from 'react-native-camera';
import CameraLib from '@features/camera/Index';
import {useNavigation} from '@react-navigation/native';
import useSendMessage from './hooks/useSendMessage';

const Chat = () => {
  const [messagedata, setMessagedata] = useState(messages);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const {handleSendMessage} = useSendMessage({setMessagedata});

  return (
    <View className="flex-1">
      <View className=" flex-1 pb-[16]  bg-white">
        <Container>
          <View className="flex-1 py-[8]" style={{gap: 4}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={messagedata}
              renderItem={({item, index}) => {
                const isNextMessageSended =
                  item?.isSender !== messagedata[index + 1]?.isSender;
                return (
                  <View
                    key={index}
                    style={
                      (!item?.isSender && style.isNotSender,
                      {marginBottom: isNextMessageSended ? 32 : 8})
                    }>
                    <SingleMessage
                      {...item}
                      isNextMessageSended={isNextMessageSended}
                    />
                  </View>
                );
              }}
            />
          </View>
          <MessageSend
            handleSendMessage={handleSendMessage}
            handleOpenCamera={() => {
              setIsCameraOpen(true);
            }}
          />
        </Container>
      </View>
      {isCameraOpen && (
        <View className="absolute w-[100%] h-[100%] top-0 bottom-0">
          <CameraLib isCameraOpen={true} />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  isSender: {},
  isNotSender: {
    alignItems: 'flex-end',
  },
});

export default Chat;
