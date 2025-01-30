import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const Drawer = ({
  position,
  children,
  isOpen,
  drawerWidth,
  renderComponent,
  handleClose,
}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState(position || 'left');

  useLayoutEffect(() => {
    if (!isOpen) return drawer.current.closeDrawer();
    drawer.current.openDrawer();
  }, [isOpen, drawer?.current]);

  return (
    <DrawerLayoutAndroid
      onDrawerClose={handleClose}
      ref={drawer}
      drawerWidth={drawerWidth || 300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => renderComponent && renderComponent()}>
      {children}
    </DrawerLayoutAndroid>
  );
};

export default Drawer;
