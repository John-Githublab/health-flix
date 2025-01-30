import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera} from 'react-native-vision-camera';

const usePermission = () => {
  const [permission, setPermission] = useState('');
  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      setPermission(newCameraPermission);
    }
    getPermission();
  }, []);
  return {
    permission,
  };
};

export default usePermission;
