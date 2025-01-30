import {View, Text, Image} from 'react-native';
import React from 'react';
import Typography from '@components/Typography/Index';
import Images from '@constants/Image';

const Inbox = ({name, role, profile, subtitle, description, time, read}) => {
  return (
    <View className="flex-row justify-between items-start" style={{gap: 8}}>
      {/* profile */}
      <Image source={profile} className="w-[48] h-[48] rounded-full  " />
      {/* user details */}
      <View>
        <View className="flex-row items-center" style={{gap: 6}}>
          <Typography variant="title" textClassName="font-medium">
            {name}
          </Typography>
          <Typography variant="title">|</Typography>
          <Typography
            variant="title"
            textClassName="color-[#00000080] "
            style={{fontWeight: 'normal'}}>
            {role}
          </Typography>
        </View>
        <Typography variant="subtitle" style={{fontWeight: 'normal'}}>
          {subtitle}
        </Typography>
        <Typography
          textClassName="truncate "
          variant="subtitle"
          style={{
            color: '#00000099',
            fontWeight: 'normal',
            textTransform: 'none',
          }}>
          {description}
        </Typography>
      </View>
      {/* time  */}
      <View style={{gap: 8}}>
        <Typography
          textClassName="truncate"
          variant="content"
          style={{color: '#00000099'}}>
          {time}
        </Typography>
        <Image source={Images.inboxTick} className="w-[24] h-[20]  self-end " />
      </View>
    </View>
  );
};

export default Inbox;
