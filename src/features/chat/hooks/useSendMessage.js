import {View, Text} from 'react-native';
import React from 'react';
import Images from '@constants/Image';

const useSendMessage = ({setMessagedata}) => {
  const handleSendMessage = msg => {
    setMessagedata(p => [
      ...p,
      {
        message: msg,
        time: '10min',
        profile: Images.inboxProfile1,
        isSender: true,
      },
    ]);
    // if the message send to server successfully return true
    return true;
  };
  return {
    handleSendMessage,
  };
};

export default useSendMessage;
