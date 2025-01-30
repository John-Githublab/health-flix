import {View, Text, Image} from 'react-native';
import React from 'react';
import Typography from '@components/Typography/Index';

const SingleMessage = data => {
  return (
    <View
      className={` items-center `}
      style={{
        gap: 8,
        flexDirection: !data?.isSender ? 'row-reverse' : 'row',
        height: 'auto',
      }}>
      <Image
        source={data?.profile}
        className="w-[31] h-[31]  "
        style={{opacity: !data?.isNextMessageSended ? 0 : 1}}
      />
      <View
        className="p-[6] pl-[9] pr-[16] bg-[#E6E9FD]"
        style={{
          borderRadius: 12,
          borderBottomRightRadius:
            !data?.isSender && data?.isNextMessageSended ? 0 : 12,
          borderBottomLeftRadius:
            data?.isSender && data?.isNextMessageSended ? 0 : 12,
        }}>
        <Typography variant="subtitle" style={{fontWeight: 'normal'}}>
          {data?.message}
        </Typography>
      </View>
    </View>
  );
};

export default SingleMessage;
